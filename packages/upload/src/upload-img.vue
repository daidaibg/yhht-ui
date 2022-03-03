<!--
 * @Author: daidai
 * @Date: 2022-01-06 10:51:00
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-25 16:08:09
 * @FilePath: \yhht-ui\yhht-ui\packages\upload\src\upload-img.vue
-->
<template>
  <div class="yh-upload-img">
    <input
      class="yh-upload__input"
      type="file"
      ref="input"
      :name="name"
      @change="handleChange"
      :multiple="multiple"
      :accept="accept"
    />
    <ul class="yh-upload-img-list">
      <li
        v-for="file in fileList"
        :key="file[fileOption.id]"
        class="yh-upload-img-list-item"
      >
        <img
          class="yh-upload-list__item-thumbnail"
          :src="file[fileOption.url]"
          :style="{ objectFit: fit }"
        />
        <div class="yh-upload-list-mask yh-flex-center">
          <i class="el-icon-zoom-in" @click="imageViewer(file)"></i>
          <i class="yh-icons-delete" @click="deleteFile(file)"></i>
        </div>
      </li>

      <template v-for="file in files">
        <li
          :key="file.uid"
          v-if="file.status !== 'success'"
          class="yh-upload-img-list-item"
        >
          <img
            class="yh-upload-list__item-thumbnail"
            :src="file.url"
            :style="{ objectFit: fit }"
          />
          <div
            class="yh-upload-list-progress yh-flex-center"
            v-if="file.status === 'uploading'"
          >
            <span>{{ parsePercentage(file.percentage) }}%</span>
          </div>
          <div class="yh-upload-list-mask yh-flex-center">
            <i class="yh-qxsc" @click="handleRemove(file)" >取消上传</i>
          </div>
        </li>
      </template>

      <div @click="handleClick">
        <slot>
          <li
            class="yh-upload-img--button yh-flex-center"
            v-if="
              !maxLength ||
              (maxLength && fileList.length + files.length < maxLength)
            "
          >
            <i class="yh-icons-plus"></i>
          </li>
        </slot>
      </div>
    </ul>
  </div>
</template>

<script>
import ajax from "./ajax";
import UploadDragger from "./upload-dragger.vue";

function noop() {}
export default {
  name: "yh-upload-img",
  components: {
    UploadDragger,
  },

  props: {
    type: String,
    action: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "file",
    },
    fit: {
      type: String,
      default: "cover",
    },
    data: Object,
    headers: Object,
    withCredentials: Boolean,
    multiple: Boolean,
    limit: Number,
    maxLength: Number,
    accept: {
      type: String,
      default: "image/*",
    },
    autoUpload: Boolean,
    fileList: Array,
    fileOption: {
      type: Object,
      default: {
        url: "url",
        id: "id",
      },
    },
    beforeUpload: Function,
    beforeRemove: Function,
    httpRequest: {
      type: Function,
      default: ajax,
    },

    onRemove: {
      type: Function,
      default: noop,
    },
    onChange: {
      type: Function,
      default: noop,
    },
    onPreview: {
      type: Function,
    },
    onSuccess: {
      type: Function,
      default: noop,
    },
    onProgress: {
      type: Function,
      default: noop,
    },
    onError: {
      type: Function,
      default: noop,
    },
    onExceed: {
      type: Function, //文件超出个数限制时的钩子
      default: noop,
    },
    onExceedLength: {
      type: Function,
      default: noop,
    },
  },
  data() {
    return {
      focusing: false,
      files: [],
      tempIndex: 1,
      reqs: {},
    };
  },
  watch: {},
  computed: {},
  mounted() {},
  destroyed() {},
  methods: {
     submit() {
      this.files
        .filter((file) => file.status === "ready")
        .forEach((file) => {
          this.upload(file.raw);
        });
    },
    //点击删除按钮
    deleteFile(file) {
      this.$emit("deleteFile", file);
    },
    imageViewer(file) {
      this.$emit("imageViewer", file);
    },
    handleChange(ev) {
      const files = ev.target.files;
      // console.log(files);
      if (!files) return;
      this.uploadFiles(files);
    },
    uploadFiles(files) {
      if (this.limit && this.fileList.length + files.length > this.limit) {
        this.onExceed && this.onExceed(files, this.fileList);
        return;
      }
      if (
        this.maxLength &&
        this.fileList.length + files.length > this.maxLength
      ) {
        this.onExceedLength && this.onExceedLength(files, this.fileList);
        return;
      }
      let postFiles = Array.prototype.slice.call(files); //对象转换成数组
      if (!this.multiple) {
        postFiles = postFiles.slice(0, 1);
      }
      if (postFiles.length === 0) {
        return;
      }
      postFiles.forEach((rawFile) => {
        this.handleStart(rawFile);
        if (this.autoUpload) this.upload(rawFile);
      });
    },
    handleStart(rawFile) {
      rawFile.uid = Date.now() + this.tempIndex++;
      let file = {
        status: "ready",
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile,
      };
      try {
        file.url = URL.createObjectURL(rawFile);
      } catch (err) {
        console.error("[Element Error][Upload]", err);
        return;
      }
      this.files.push(file);
      this.onChange(file, this.files);
    },
    abort(file) {
      const { reqs } = this;
      if (file) {
        let uid = file;
        if (file.uid) uid = file.uid;
        if (reqs[uid] && reqs[uid].abort) {
          reqs[uid].abort();
        } else if (file.cancel) {
          // file.cancel();
        }
      } else {
        Object.keys(reqs).forEach((uid) => {
          if (reqs[uid] && reqs[uid].abort) reqs[uid].abort();
          delete reqs[uid];
        });
        this.files.forEach((file) => {
          if (file.cancel) {
            // file.cancel();
          }
          delete file.cancel;
        });
      }
    },
    upload(rawFile) {
      this.$refs.input.value = null;
      if (!this.beforeUpload) {
        return this.post(rawFile);
      }
      const before = this.beforeUpload(rawFile);
      if (before && before.then) {
        before.then(
          (processedFile) => {
            const fileType = Object.prototype.toString.call(processedFile);

            if (fileType === "[object File]" || fileType === "[object Blob]") {
              if (fileType === "[object Blob]") {
                processedFile = new File([processedFile], rawFile.name, {
                  type: rawFile.type,
                });
              }
              for (const p in rawFile) {
                if (rawFile.hasOwnProperty(p)) {
                  processedFile[p] = rawFile[p];
                }
              }
              this.post(processedFile);
            } else {
              this.post(rawFile);
            }
          },
          () => {
            this.handleRemove(null, rawFile);
          }
        );
      } else if (before !== false) {
        this.post(rawFile);
      } else {
        this.handleRemove(null, rawFile);
      }
    },
    post(rawFile) {
      const { uid } = rawFile;
      const options = {
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: rawFile,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: (e) => {
          this.handleProgress(e, rawFile);
        },
        onSuccess: (res) => {
          this.handleSuccess(res, rawFile);
          delete this.reqs[uid];
        },
        onError: (err) => {
          // console.log(err);
          this.handleError(err, rawFile);
          delete this.reqs[uid];
        },
        setCancel: (c) => {
          this.setCancel(c, rawFile);
        },
      };
      const req = this.httpRequest(options);
      this.reqs[uid] = req;
      if (req && req.then) {
        req.then(options.onSuccess, options.onError, options.onProgress);
      }
    },
    handleRemove(file, raw) {
      if (raw) {
        file = this.getFile(raw);
      }
      let doRemove = () => {
        this.abort(file);
        let fileList = this.files;
        fileList.splice(fileList.indexOf(file), 1);
        this.onRemove(file, fileList);
      };

      if (!this.beforeRemove) {
        doRemove();
      } else if (typeof this.beforeRemove === "function") {
        const before = this.beforeRemove(file, this.files);
        if (before && before.then) {
          before.then(() => {
            doRemove();
          }, noop);
        } else if (before !== false) {
          doRemove();
        }
      }
    },
    //上传时
    handleProgress(ev, rawFile) {
      const file = this.getFile(rawFile);
      if (file) {
        this.onProgress(ev, file, this.files);
        file.status = "uploading";
        file.percentage = ev.percent || 0;
      }
    },
    //设置取消请求
    setCancel(c, rawFile) {
      const file = this.getFile(rawFile);
      if (file) {
        file.cancel = c;
      }
    },
    // 文件上传成功时的钩子
    handleSuccess(res, rawFile) {
      const file = this.getFile(rawFile);
      if (file) {
        const fileList = this.files;
        fileList.splice(fileList.indexOf(file), 1);
        file.status = "success";
        file.response = res;
        this.onSuccess(res, file, this.files);
        this.onChange(file, this.files);
      }
    },
    // 文件上传失败时的钩子

    handleError(err, rawFile) {
      const file = this.getFile(rawFile);
      const fileList = this.files;
      file.status = "fail";
      fileList.splice(fileList.indexOf(file), 1);
      this.onError(err, file, this.files);
      this.onChange(file, this.files);
    },
    getFile(rawFile) {
      let fileList = this.files;
      let target;
      fileList.every((item) => {
        target = rawFile.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    //进度条
    parsePercentage(val) {
      return parseInt(val, 10);
    },
    handleClick() {
      this.$refs.input.value = null;
      this.$refs.input.click();
    },
  },
};
</script>

<style scoped>
.yh-upload__input {
  display: none;
}
/* 加号按钮 */
.yh-upload-img--button {
  /* background-color: #fbfdff; */
  background-color: var(--yh-bg-color-secondarycontainer);
  border: 1px dashed var(--yh-border-level-3-color);
  border-radius: 6px;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  cursor: pointer;
}
.yh-upload-img--button .yh-icons-plus {
  font-size: 22px;
  color: var(--yh-text-color-primary);
 
}

/* 列表 */
.yh-upload-img-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.yh-upload-img-list-item {
  position: relative;
  margin: 0 8px 8px 0;
  border-radius: 6px;
  overflow: hidden;
  background-color: var(--yh-bg-color-container);
  border: 1px solid var(--yh-component-border);
  box-sizing: border-box;
  width: 100px;
  height: 100px;
}
.yh-upload-list-progress,
.yh-upload-list-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: column;
  left: 0;
  top: 0;
  background: var(--yh-mask-active);
  color: #fff;
}
.yh-upload-list__item-thumbnail {
  /* cursor: pointer; */
  width: 100%;
  height: 100%;
}
.yh-upload-img--button:hover,
.yh-upload-img:focus {
  border-color: var(--yh-text-color-brand);
  color: var(--yh-text-color-brand);
}
/* 操作 */
.yh-upload-list-mask {
  flex-direction: row;
  transition: opacity 0.3s;
  opacity: 0;
}
.yh-upload-img-list li:hover .yh-upload-list-mask {
  opacity: 1;
}
.yh-upload-list-mask i {
  font-size: 20px;
  cursor: pointer;
}
.yh-upload-list-mask i + i {
  margin-left: 15px;
}
.yh-upload-list-mask .yh-qxsc{
  font-size: 14px;
}

</style>