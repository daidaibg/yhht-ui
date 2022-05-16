<!--
 * @Author: daidai
 * @Date: 2021-09-14 15:02:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-12 15:22:01
 * @FilePath: \yhht-ui\yhht-ui\packagesEle\getXY\src\main.vue
-->
<template>
  <el-dialog
    :title="title"
    append-to-body
    :visible.sync="visible"
    :width="width"
    :close-on-click-modal="false"
    class="yh-lnglats"
    :before-close="beforeclose"
    :custom-class="yhGetxyClass"
    modal
  >
    <!-- v-dialogDrag -->

    <div class="yh-inputs" v-if="!searchHide">
      <el-input
        v-model="keyword"
        placeholder=""
        @input="search"
        clearable
        size="mini"
        @focus="tipsshow = true"
      ></el-input>
      <ul v-show="tipsshow">
        <li
          class="text-overflow-2"
          @click="onitem(item)"
          v-for="(item, i) in tips"
          :key="i"
          :title="item.name + '(' + item.district + ')'"
        >
          <i>{{ i + 1 }}、</i>
          {{ item.name }}
          <span>({{ item.district }})</span>
        </li>
      </ul>
    </div>
    <div class="yh-latlngtext">
      经度：<span>{{ lanlat.lng }}</span
      >&nbsp; 纬度：<span>{{ lanlat.lat }}</span>
    </div>
    <div ref="map" :id="mapId"></div>
    <span class="dialog-footer">
      <el-button @click="close" size="mini">取 消</el-button>
      <el-button type="primary" @click="subItem" size="mini" :loading="loading"
        >保 存</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import { defProps } from "./config";
export default {
  name: "yh-getxy",
  components: {},
  props: {
    title: {
      type: String,
      default: () => {
        return defProps.title;
      },
    },
    searchHide: {
      type: Boolean,
      default: () => {
        return defProps.searchHide;
      },
    },
    width: {
      type: String,
      default: () => {
        return defProps.width;
      },
    },
  },
  beforeDestroy() {
    this.destroyMap();
  },
  data() {
    return {
      visible: false,
      lanlat: {
        lat: "",
        lng: "",
      },
      loading: false,
      map: null,
      mapId: "yh-map",
      autoComplete: null,
      keyword: "",
      tips: [],
      tipsshow: false,
      emitMessage: () => {},
      yhGetxyClass: "",
    };
  },
  mounted() {},
  methods: {
    init(x, y) {
      this.visible = true;
      // console.log(x, y, this.map);
      this.$nextTick(() => {
        if (!this.map) {
          this.map = new AMap.Map(this.mapId, {
            viewMode: "3D", // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D',
            zoom: 11, //初始化地图层级
            // center: [116.397428, 39.90923], //初始化地图中心点
          });
          this.mapEvent();
          var options = {
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：5s
            position: "LB", //定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
          };

          // "AMap.PlaceSearch",
          AMap.plugin(["AMap.Geolocation", "AMap.AutoComplete"], () => {
            this.PlaceSearch();
            var geolocation = new AMap.Geolocation(options);
            this.map.addControl(geolocation);
            geolocation.getCurrentPosition((status, result) => {
              //   console.log(status, result);
              if (x && y) {
                this.formatxy(x, y);
              }
              if (status == "complete") {
                this.Geolocationpostion = result.position;
                if (x && y) {
                } else {
                  this.lanlat = result.position;
                  this.setMarker();
                }
                this._parentMessage("locationMessage", {
                  success: true,
                  result: result.position,
                });
                document
                  .querySelector(".amap-geolocation-marker")
                  .addEventListener("click", this.addclickGeolocation);
              } else {
                // onError(result);
                this._parentMessage("locationMessage", {
                  success: false,
                  message: result.message,
                  originMessage: result.originMessage,
                });
              }
            });
          });
        } else {
          if (x && y) {
            this.formatxy(x, y);
          } else {
            if (this.Geolocationpostion) {
              this.lanlat = this.Geolocationpostion;
              this.formatxy(this.lanlat.lng, this.lanlat.lat);
            }
          }
        }
      });
    },
    onitem(item) {
      // console.log(item);
      this.tipsshow = false;
      this.lanlat = {
        lat: item.location.lat,
        lng: item.location.lng,
      };
      this.setMarker();
      this.map.setCenter([item.location.lng, item.location.lat]); //设置地图中心点
      //   this.map.setZoom(18); //设置地图层级
    },
    formatxy(x, y) {
      this.onitem({
        location: {
          lng: x,
          lat: y,
        },
      });
    },
    // 搜索提示
    search() {
      if (this.keyword == "") {
        this.tips = [];
        return;
      }
      this.autoComplete.search(this.keyword, (status, result) => {
        // console.log(status, result);
        if (status == "complete") {
          this.tips = result.tips;
          this._parentMessage("searchMessage", {
            success: true,
            result: result.tips,
          });
        } else if (status == "no_data") {
          this.tips = [];
          this._parentMessage("searchMessage", {
            success: true,
            result: [],
          });
        } else {
          this._parentMessage("searchMessage", {
            success: false,
            message: "未知异常，查询失败！",
            result: result,
          });
        }
      });
    },
    _parentMessage(type, param) {
      this.$emit(type, param);
      this.emitMessage(type, param);
    },
    PlaceSearch() {
      let _this = this;
      var autoOptions = {
        city: "全国",
      };
      _this.autoComplete = new AMap.AutoComplete(autoOptions);
      // console.log(_this.autoComplete);
    },
    //监听点击定位点
    addclickGeolocation() {
      this.lanlat = this.Geolocationpostion;
      this.setMarker();
    },
    destroyMap() {
      let amapGeolocationMarkerDom = document.querySelector(
        ".amap-geolocation-marker"
      );
      amapGeolocationMarkerDom &&
        amapGeolocationMarkerDom.removeEventListener(
          "click",
          this.addclickGeolocation
        );
      if (this.map) {
        this.map.destroy();
        // console.info("地图已销毁");
      }
    },
    mapEvent() {
      this.map.on("click", (e) => {
        this.lanlat = {
          lat: e.lnglat.getLat(),
          lng: e.lnglat.getLng(),
        };
        this.setMarker();
        // console.log(this.lanlat);
      });
    },
    setMarker() {
      if (!this.marker) {
        let size = new AMap.Size(20, 26);
        this.marker = new AMap.Marker({
          zIndex: 99,
          icon: new AMap.Icon({
            image: require("../../../src/img/poi-marker-default.png"),
            size: size,
            imageSize: size,
          }),
          position: [this.lanlat.lng, this.lanlat.lat],
          offset: new AMap.Pixel(-10, -23),
        });

        this.marker.setMap(this.map);
      } else {
        this.marker.setPosition(
          new AMap.LngLat(this.lanlat.lng, this.lanlat.lat)
        );
      }
    },
    close() {
      this.visible = false;
      this.emitClose({});
    },
    beforeclose(done) {
      this.emitClose({});
      if (done) {
        done();
      }
    },
    emitClose(lanlat,isClickOk=false){
      this.$emit('close',lanlat,isClickOk)
      this.emitMessage("close", lanlat,isClickOk);


    },
    subItem() {
      this.visible = false;
      let lanlat = {};
       if( this.lanlat.lat&&this.lanlat.lat!=='' ){
        lanlat={
          ...this.lanlat
        }
         this.emitClose(lanlat,true)
      }else{
         this.emitClose(lanlat,true)
      }
    },
  },
};
</script>
<style scoped >
@import "./main.css";
</style>