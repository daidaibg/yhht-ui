<!--
 * @Author: daidai
 * @Date: 2021-09-09 17:34:47
 * @LastEditors: daidai
 * @LastEditTime: 2021-10-29 16:14:14
 * @contnet:   不兼容IE
 * @FilePath: \yhht-ui\yhht-ui\packages\search\src\search.vue
-->
<template>
  <div class="yhgd-search" :style="searchStyle">
    <div
      class="yh-search_wrap"
      @mouseenter="hovering = true"
      @mouseleave="hovering = false"
    >
      <div
        class="yh-search_inner_wrap"
        :style="{ width: defaultConfig.inputWidth }"
      >
        <div class="yh-search-prepend" v-if="$slots.prepend">
          <slot name="prepend"> </slot>
        </div>
        <input
          type="text"
          class="yh-search_inner"
          ref="input"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
          @focus="focus"
          @blur="blur"
          @input="handleInput"
          @change="handleChange"
          @keydown.enter="enters"
          @keydown.up.prevent="keyUp"
          @keydown.down.prevent="keyDown"
          @keyup.delete="keyDelete"
          v-bind="$attrs"
          :class="{ yhearch_focus: searchType === 'Focused' }"
        />
        <i class="yh-icons-circle-close" v-if="showClear" @click="clear"></i>
      </div>
      <slot name="yh-search-search">
        <button
          class="yh-search_right yh-button"
          :style="suffixStyle"
          @click="enters"
        >
          搜索
        </button>
      </slot>
    </div>
    <slot></slot>
    <!-- 输入提示 s -->
    <template v-if="tipFlag">
      <div class="yh-search_tip" :style="{ width: defaultConfig.inputWidth }">
        <slot name="tip-up"> </slot>
        <ul class="yh-search-tip-list">
          <li
            v-for="(item, i) in tipList"
            :key="i"
            @click.stop="clickTip(item)"
            :class="{ 'yh-search-tip-active': activeTip == i }"
          >
            <slot name="tip-list-slot" :data="item">
              <i class="yh-icons-search"></i>
              <span>{{ item[defaultConfig.tipName] }}</span>
            </slot>
          </li>
        </ul>
      </div>
    </template>
    <!-- 输入提示 e -->
    <!-- 搜索列表 s -->
    <transition name="yh-zoom-in-top">
      <div
        class="yh-search_list"
        v-show="searchFlag"
        :style="{ maxHeight: maxHeight, width: defaultConfig.inputWidth }"
      >
        <div v-show="!searchShrink">
          <ul v-if="listTotal > 0">
            <li
              v-for="(item, i) in searchList"
              :key="i"
              @click="clickList(item)"
            >
              <div
                class="yh-search_num"
                :style="`background-position-x:${i * -18}px;`"
              ></div>
              <div class="yh-search-list_content">
                <p>{{ item[defaultConfig.listName] }}</p>
                <p class="tip">
                  {{ item[defaultConfig.listTip] }}
                </p>
              </div>
              <div class="yh-search-list_img_wrap">
                <div class="yh-search-list_img">
                  <img
                    :src="item.url"
                    style="object-fit: cover"
                    v-if="item.url"
                  />
                  <img
                    :src="require('yhht-ui/src/img/imgerror.png')"
                    style="object-fit: scale-down"
                    v-else
                  />
                </div>
              </div>
            </li>
          </ul>
          <div class="yh-search_blueText" v-else>暂未搜索到结果</div>
          <div
            v-if="listTotal > 10"
            style="display: flex; justify-content: center"
          >
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pageSize"
              layout="total, prev, pager, next"
              :total="listTotal"
              small
            >
            </el-pagination>
          </div>
        </div>
        <div
          class="yh-search_blueText"
          v-show="searchShrink"
          @mousemove="searchShrink = false"
        >
          共找到{{ listTotal }}条结果。
        </div>
      </div>
    </transition>
    <!-- 搜索列表 e -->
    <!-- 搜索详情 s -->
    <transition name="yh-zoom-in-top">
      <div
        class="yh-search_detail"
        v-if="detailFlag"
        :style="{ width: defaultConfig.inputWidth }"
      >
        <slot name="detail-slot" :data="detailData">
          <div
            class="yh-search_blueText yh-box-shadow"
            style="margin: 8px 0"
            @click="(searchFlag = true), (detailFlag = false)"
          >
            <span class="yh-icons-arrow-left"></span>
            <p>返回“{{ nativeInputValue }}”的搜索结果</p>
          </div>
          <yh-skeleton
            style="width: 100%; background: #fff"
            :loading="detailLoading"
            animated
          >
            <template slot="template">
              <yh-skeleton-item
                variant="div"
                class="yh-searchdetail_title"
                style="height: 70px"
              />
              <yh-skeleton-item
                variant="div"
                style="margin-top: 10px; height: 20px"
              />
              <yh-skeleton-item
                variant="div"
                style="margin: 10px 0; height: 20px"
              />
              <div style="height: 80px; padding: 8px 12px">
                <yh-skeleton-item
                  variant="image"
                  style="width: 26%; margin: 0 3.5%; height: 100%"
                />
              </div>
            </template>
            <template>
              <div class="yh-search_detail-content yh-box-shadow">
                <div class="yh-searchdetail_title">
                  <div>
                    <h4>{{ detailData[defaultConfig.detailName] }}</h4>
                    <p>
                      {{ detailData[defaultConfig.detailTip] }}
                    </p>
                  </div>
                  <div class="yh-flex-center">
                    <slot name="detail-location">
                      <div
                        v-if="defaultConfig.locationShow"
                        @click="$emit('location', detailData)"
                      >
                        <i class="yh-icons-position"></i
                        ><span>{{ defaultConfig.locationText }}</span>
                      </div>
                    </slot>
                  </div>
                </div>
                <div class="yh-searchdetail_address">
                  <span></span
                  >{{ detailData[defaultConfig.detailAddress] || "暂无地址" }}
                </div>
                <h5>图片</h5>
                <ul
                  class="yh-search-detailPhoto"
                  :class="{
                    'yh-search-detailPhotoshow':
                      detailData[defaultConfig.detailImg] &&
                      detailData[defaultConfig.detailImg].length > 0,
                  }"
                >
                  <template
                    v-if="
                      detailData[defaultConfig.detailImg] &&
                      detailData[defaultConfig.detailImg].length > 0
                    "
                  >
                    <div>
                      <template v-for="(item, i) in 3">
                        <li
                          :key="i"
                          v-if="detailData[defaultConfig.detailImg][i]"
                          @click="
                            detailImg(detailData[defaultConfig.detailImg][i])
                          "
                        >
                          <img
                            :src="detailData[defaultConfig.detailImg][i]"
                            style="object-fit: cover"
                          />
                        </li>
                      </template>
                    </div>
                  </template>
                  <template v-else>
                    <li v-for="item in 1" :key="item">
                      <img
                        :src="require('yhht-ui/src/img/imgerror.png')"
                        alt=""
                      />
                    </li>
                  </template>
                </ul>
              </div>
            </template>
          </yh-skeleton>
        </slot>
      </div>
    </transition>
    <!-- 搜索详情 e -->
    <yh-image-viewer
      :urlList="previewSrcList"
      v-if="showViewer"
      :on-close="closeViewer"
      :initial-index="imageIndex"
    ></yh-image-viewer>
  </div>
</template>

<script type="text/babel">
import { isKorean } from "yhht-ui/src/util/elt/shared";
export default {
  name: "YhSearch",
  props: {
    suffixStyle: {
      type: Object,
      default: () => {},
    },
    config: {
      type: Object,
      default: () => {},
    },
    maxHeight: {
      type: String,
      default: () => "50vh",
    },
    searchStyle: {
      type: Object,
      default: () => {
        return {
          position: "absolute",
          top: "20px",
          left: "20px",
        };
      },
    },
    listTotal: {
      default: () => 0,
    },
    value: [String, Number],
  },
  data() {
    return {
      searchType: "Blured", //blured 失去焦点 || Focused 获得焦点
      isComposing: false,
      tipList: [],
      tipFlag: false,
      clickTipData: null,
      activeTip: -1,
      searchList: [],
      searchFlag: false,
      searchShrink: false,
      detailData: {},
      detailFlag: false,
      detailLoading: false,
      srcList: [],
      previewSrcList: [],
      showViewer: false,
      pageSize: 10,
      currentPage: 1,
      defaultConfig: {
        locationText: "定位",
        locationShow: true,
        detailName: "name",
        detailImg: "files",
        detailAddress: "address",
        detailTip: "tip",
        tipName: "name",
        listName: "name",
        listTip: "tip",
        inputWidth: "350px",
      },
      hovering: false,
      oldValue: "",
    };
  },
  mounted() {
    this.setNativeInputValue();
    this.defaultConfig = Object.assign(this.defaultConfig, this.config);
  },
  watch: {
    nativeInputValue(value, oldValue) {
      this.oldValue = oldValue;
      this.setNativeInputValue();
    },
  },
  computed: {
    showClear() {
      return (
        this.nativeInputValue && (this.searchType == "Focused" || this.hovering)
      );
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    },
    imageIndex() {
      let previewIndex = 0;
      const srcIndex = this.previewSrcList.indexOf(this.src);
      if (srcIndex >= 0) {
        previewIndex = srcIndex;
      }
      console.log(previewIndex);
      return previewIndex;
    },
  },
  methods: {
    clear() {
      this.clearn();
      this.$emit("input", "");
      this.$emit("clear");
    },
    keyUp(event) {
      // console.log(event)
      if (this.activeTip == -1) return;
      this.activeTip = this.activeTip - 1;
    },
    keyDown(event) {
      if (this.activeTip == this.tipList.length - 1) {
        return;
      }
      this.activeTip = this.activeTip + 1;
    },
    keyDelete(e) {
      // this.$emit("delete", e, this.oldValue);
    },
    enters(e) {
      this.clickTip(null);
    },
    // 分页发生变化
    handleCurrentChange() {
      this.emitclickListPage();
    },
    // 点击图片预览
    detailImg(item) {
      this.previewSrcList = this.detailData.files;
      this.src = item;
      this.showViewer = true;
      this.$emit("detailImg", item);
    },
    closeViewer() {
      this.showViewer = false;
    },
    /**
     * @description: 点击查询列表
     * @param {Object} listRow 点击列表数据
     * @return {*}
     */
    clickList(listRow) {
      this.searchFlag = false;
      this.detailFlag = true;
      this.detailLoading = true;
      this.searchListClick = listRow;
      this.$emit("clickList", this.searchListClick, (detail) => {
        console.log(detail);
        this.detailLoading = false;
        this.detailData = detail;
      });
    },
    //搜索列表存在时收起来,清除搜索提示 ，
    shrinkSearch() {
      this.tipFlag = false;
      this.activeTip = -1;
      this.searchShrink = true;
    },
    //清空
    clearn() {
      this.detailFlag = false;
      this.searchFlag = false;
      this.tipFlag = false;
      this.activeTip = -1;
    },
    //派发搜索与tip点击事件
    emitclickListPage() {
      if (this.activeTip != -1) {
        this.clickTipData = this.tipList[this.activeTip];
        this.activeTip = -1;
      }
      if (this.nativeInputValue == "") return;
      this.$emit("clickTip", this.clickTipData, this.currentPage, (list) => {
        // console.log(list);
        this.searchFlag = true;
        this.searchShrink = false;
        this.searchList = list;
      });
    },
    /**
     * @description: 点击提示
     * @param {Object} row 点击提示数据
     * @return {*}
     */
    clickTip(row) {
      this.tipFlag = false;
      this.currentPage = 1;
      this.clickTipData = row;
      this.emitclickListPage();
    },
    handleCompositionStart() {
      this.isComposing = true;
    },
    handleCompositionUpdate(event) {
      const text = event.target.value;
      const lastCharacter = text[text.length - 1] || "";
      this.isComposing = !isKorean(lastCharacter);
    },
    handleCompositionEnd(event) {
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(event);
      }
    },
    handleInput(event) {
      // should not emit input during composition
      if (this.isComposing) return;
      // if (event.target.value === this.nativeInputValue) return;
      // console.log(event.target.value)
      this.$emit("input", event.target.value, (tipList) => {
        // console.log(tipList);
        if (event.target.value == "") {
          this.clearn();
        } else {
          this.tipFlag = true;
          this.activeTip = -1;
          this.tipList = tipList;
        }
      });
      // ensure native input value is controlled
      this.$nextTick(this.setNativeInputValue);
    },
    focus(event) {
      this.searchType = "Focused";
      document.onkeydown = (e) => {
        if (e.keyCode === 8) {
          this.$emit("delete", e);
        }
      };
      this.$emit("focus", event);
    },
    blur() {
      document.onkeydown = undefined;
      this.searchType = "Blured";
      this.timer = setTimeout(() => {
        // this.tipFlag = false;
        this.activeTip = -1;
        clearTimeout(this.timer);
      }, 100);
    },
    //仅在输入框失去焦点或用户按下回车时触发
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    getInput() {
      return this.$refs.input;
    },
  },
};
</script>
<style scoped>
.yh-search_blueText {
  color: #3385ff;
  min-height: 38px;
  padding: 12px;
  box-sizing: border-box;
  cursor: pointer;
  background: #fff;
  line-height: 18px;
  font-size: 13px;
  display: flex;
  align-items: center;
}
.yh-search_blueText p {
  margin: 0;
  color: #3385ff;
}
.yhgd-search {
  position: absolute;
  height: 40px;
  font-size: 14px;
  box-shadow: 1px 2px 1px rgb(0 0 0 / 15%);
  box-sizing: border-box;
  /* border: 1px solid #dcdfe6; */
  z-index: 999;
}
.yh-search_wrap {
  display: flex;
  height: 100%;
}
.yh-search_inner_wrap {
  position: relative;
  display: flex;
  background-color: #fff;
}
.yh-search_inner_wrap .yh-search-prepend {
  height: 100%;
  padding: 0 0px 0 8px;
}
.yh-search_inner_wrap .yh-icons-circle-close {
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: #c0c4cc;
}

.yh-search_inner {
  flex: 1;
  height: 100%;
  line-height: 40px;
  background-color: #fff;
  background-image: none;
  /* border-radius: 4px; */
  /* border: 1px solid #dcdfe6;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); */
  border: none;
  padding: 0 30px 0 8px;
  box-sizing: border-box;
  color: #606266;
}
.yh-search_inner:focus {
  outline: none;
  border: none;
  /* border-color: #409eff; */
}
.yh-search_right {
  width: 50px;
  line-height: 40px;
  text-align: center;
  height: 100%;
}

/* 搜索提示 */
.yh-search_tip {
  /* width: calc(100% - 50px); */
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  border-top: solid 1px #e7e7e7;
  background: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
}
.yh-search-tip-list li {
  width: 100%;
  height: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 8px;
  font-size: 12px;
}
.yh-search-tip-list li i {
  margin-right: 8px;
}
.yh-search-tip-list li span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.yh-search-tip-list li:hover {
  background: #e6e6e6;
}
.yh-search-tip-active {
  background: #e6e6e6;
}
/* 搜索列表 */
.yh-search_list {
  /* width: calc(100% - 50px); */
  z-index: 9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 0px;
  background: #fff;
  margin-top: 8px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  left: 0;
}

.yh-search_list::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.yh-search_list::-webkit-scrollbar-button {
  height: 0;
  width: 0;
}
.yh-search_list::-webkit-scrollbar-thumb {
  background: #ccc;
}
.yh-search_list::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
.yh-search_list ul {
  padding: 6px;
}

.yh-search_list ul li {
  cursor: pointer;
  display: flex;
  height: 44px;
  padding: 6px;
  margin-bottom: 4px;
}
.yh-search_list ul li:hover {
  background-color: #f6f6f6;
}
.yh-search_list ul li:hover .yh-search_num {
  background-position-y: -166px;
}

.yh-search_num {
  background-position-y: -139px;
  background: url("../../../src/img/searchs.png") no-repeat;
  width: 18px;
  height: 27px;
  display: inline-block;
  margin-left: 6px;
  margin-top: 4px;
  background-position: 0 -139px;
}
.yh-search-list_content {
  flex: 1;
  margin: 0 8px;
}
.yh-search-list_content p {
  font-size: 13px;
  line-height: 1.2;
}
.yh-search-list_content p:first-child {
  color: #3385ff;
  outline: 0;
  cursor: pointer;
  margin: 4px 0;
  font-size: 15px;
}
.yh-search-list_content .tip {
  color: #666;
  font-size: 12px;
  margin: 0px;
  height: 14px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.yh-search-list_img_wrap {
  width: 36px;
  height: 100%;
}
.yh-search-list_img {
  width: 100%;
  margin-top: 16px;
  height: calc(100% - 16px);
  /* height: 44px; */
}
.yh-search-list_img img {
  width: 100%;
  height: 100%;
}
/* 搜索详情 */
.yh-search_detail {
  z-index: 9;
  position: absolute;
  top: 100%;
  left: 0;
  /* width: calc(100% - 50px); */
}
.yh-search_detail-content {
  background: #fff;
}
.yh-searchdetail_title {
  background: #3385ff;
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  box-sizing: border-box;
}
.yh-searchdetail_title > div:first-child {
  flex: 1;
}
.yh-searchdetail_title > div:first-child h4 {
  font-size: 16px;
  margin: 0;
  color: #fff;
}
.yh-searchdetail_title > div:first-child p {
  margin-top: 14px;
  font-size: 12px;
  margin: 0;
  color: #fff;
}
.yh-searchdetail_title > div:last-child {
  width: 60px;
  margin-left: 4px;
}
.yh-searchdetail_title > div:last-child div {
  cursor: pointer;
  color: #fff;
  border: solid 1px #fff;
  border-radius: 4px;
  padding: 4px;
  font-size: 12px;
}
.yh-searchdetail_title > div:last-child div:hover {
  background: #fff;
  color: #3385ff;
  border: solid 1px #3385ff;
}
.yh-searchdetail_address {
  color: #000;
  background: #fff;
  height: 40px;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(226, 226, 226);
  font-size: 12px;
  color: #666666;
}
.yh-searchdetail_address span {
  background-image: url("../../../src/img/detail-general-info.png");
  background-repeat: no-repeat;
  height: 16px;
  width: 14px;
  margin-right: 3px;
  background-position: 0 -183px;
}
.yh-search_detail-content h5 {
  background: #fff;
  font-size: 12px;
  font-weight: 700;
  color: #333;
  line-height: 34px;
  text-indent: 12px;
  border-bottom: 1px solid #eee;
}
.yh-search-detailPhoto {
  background: #fff;
  padding: 8px 12px;

  max-height: 80px;
}
.yh-search-detailPhoto > div {
  display: flex;
  flex-wrap: wrap;
}
.yh-search-detailPhoto li {
  width: 26%;
  margin: 0 3.5%;
  overflow: hidden;
}

.yh-search-detailPhoto li > img {
  width: 100%;
}
.yh-search-detailPhotoshow li {
  height: 80px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  position: relative;
}
</style>