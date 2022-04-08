/*
 * @Author: daidai
 * @Date: 2022-02-11 14:17:34
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-11 14:19:14
 * @FilePath: \yhht-ui\src\views\com\uploads\upload.js
 */
export default {
    codeText:`<template>
    <yh-upload-img
        :action="action"
        :multiple="false"
        autoUpload
        :headers="{ token: 'test test test test' }"
        @deleteFile="deleteFile"
        @imageViewer="imageViewer"
        :onSuccess="onSuccess"
        :fileOption="fileOption"
        :fileList="fileList"
    >
    </yh-upload-img>
</template>

<script>
  export default {
    data() {
      return {
        action:
          "https://jsonplaceholder.typicode.com/posts/",
        fileList: [],
        fileOption: {
          id: "id",
          url: "filePath",
        },
      };
    },
    created() {},
    mounted() {},
    methods: {
      deleteFile(file) {
        console.log(file);
      },
      imageViewer(file) {
        console.log(file);
      },
      onSuccess(res) {
        console.log(res);
          this.fileList.push({
              id:new Date().getTime(),
              filePath:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
          });
      },
      onError(res) {
        console.log(res);
          this.fileList.push({
              id:new Date().getTime(),
              filePath:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
          });
      },
    },
  };
</script>`
}