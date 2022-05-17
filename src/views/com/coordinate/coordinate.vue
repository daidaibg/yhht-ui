<!--
 * @Author: daidai
 * @Date: 2022-02-16 15:00:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-16 10:40:31
 * @FilePath: \yhht-ui\src\views\link-ele\Get-xy\Get-xy.vue
-->

<template>
  <div>
    <h2>获取xy坐标</h2>
    <p>默认为高德地图，返回xy经纬度坐标。（后续考虑兼容其他地图）</p>
    <div class="success">
      <p>如果您使用element，可以使用这个组件或去使用结合element开发的组件（  <el-link
         href="/components/getxy"
        type="primary"
        >getXY </el-link
      >），支持两种方式。</p>
    </div>
    <div class="warning">
      <p>修改样式的话未提供开放接口，需要通过css强制修改样式</p>
      <p>经纬度要为数字类型</p>

    </div>
    <div class="warning">
      <p>新版本谷歌的安全策略，禁止了非安全地址的获取定位地址，所以除安全地址外获取定位地址均会报错。</p>

    </div>
    <p>
      如果配置过请忽略，请先配置好地图配置。官方配置（
      <el-link
        href="https://lbs.amap.com/api/jsapi-v2/guide/abc/load"
        target="_blank"
        type="primary"
        >高德API</el-link
      >
      ）
    </p>
    <code-light
      :text="codeText.AmpLink"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>
    <h3>例子</h3>

    <code-wrap :codeText="codeText.codetext" code-type="xml">
      <yh-button theme="primary" @click="openGetxy">获取坐标</yh-button>
      <yh-button theme="primary" @click="openGetxy(118.110602, 24.540688)"
        >获取坐标（传参）</yh-button
      >

      <yh-coordinate
        @close="close"
        ref="yhxy_ref"
        @searchMessage="searchMessage"
        @locationMessage="locationMessage"
      ></yh-coordinate>
    </code-wrap>
    <h3>通过方法调用</h3>
    <p>通过方法调用，需要先引入</p>
    <div class="warning">
      <p>
        一个页面最好只用一种方式引入,如果通过两种方式，他会创建两遍组件而非一遍。
      </p>
      <p>
        因为把组件添加至body中，修改样式需要在全局修改，或则组件样式不添加scoped
      </p>
      
    </div>
    <code-light
      :text="`import { GetCoordinate } from &quot;yhht-ui&quot;;`"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>
    <h3>例子</h3>
    <code-wrap :codeText="codeText.codefun" code-type="xml">
      <yh-button theme="primary" @click="funGetxy(118.110602, 24.540688)"
        >方法调用</yh-button
      >
      <yh-button theme="primary" @click="funGetxy2(118.110602, 24.540688)"
        >方法调用(隐藏搜索框)</yh-button
      >
    </code-wrap>
    <h3>Options（组件）</h3>
    <TableParam :data="def" />
    <h3>methods（组件）</h3>
    <TableParam :data="dragData" type="events" />
    <h3>方法（组件）</h3>
    <span class="codelit">this.$refs['refName']</span>
    <TableParam :data="funs" type="funs" />
    <h3>参数params（通过函数调用）</h3>
    <p>
      整体为一个对象，以下皆为对象参数，
      <span class="codelit">getXy({...params}})</span>
    </p>
    <TableParam :data="funs2" type="funs" />
    <h3>方法（通过函数调用）</h3>
    <code-light
      :text="`let GetCoordinate=GetCoordinate({...params}}); 
GetCoordinate.destroy();//等...`"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>
    <TableParam :data="funsfun" type="funs" />
  </div>
</template>

<script>
import code from "./coordinate";
import { GetCoordinate } from "yhht-ui";
export default {
  data() {
    return {
      codeText: code,
      def: [
        {
          key: "searchHide",
          explain: "是否显示搜索框",
          type: "Boolean",
          opt: "false|true",
          def: "true",
        },
      ],
      dragData: [
        {
          method: "locationMessage",
          explain:
            "定位消息，默认开启了定位，定位成功定位失败都会在此显示(res.success true 成功 | false 失败)",
          parms: "(res) {} ",
        },
        {
          method: "searchMessage",
          explain: "搜索提示消息(res.success true 成功 | false 失败)",
          parms: "(res) {}",
        },
        {
          method: "close",
          explain: "关闭事件，xy坐标，isClickOk true代表点击确定按钮",
          parms: "(xyData,isClickOk) {}",
        },
      ],
      funs: [
        {
          name: "init",
          explain:
            '必须调用此方法才能使弹窗出现，this.$refs["refName"].init(x,y), x、y如果有默认坐标传入会打点到传入坐标',
        },
      ],
      funsfun: [
        {
          name: "destroy()",
          explain:
            "注销此方法，下次调用就是重新创建，如果不销毁，下次使用还是上次创建的，如果传参参数会改变。",
        },
      ],
      funs2: [
        {
          name: "lat",
          explain: "纬度,必须经纬度同时传才会生效",
        },
        {
          name: "lng",
          explain: "经度",
        },
        {
          name: "yhGetxyClass",
          explain: "dislog 的自定义class名",
        },
        {
          name: "searchHide",
          explain: "Boolean值  默认false 会显示搜索框，true不显示",
        },
        {
          name: "locationMessage",
          explain:
            "(res)=>{} ，搜索提示消息 res.success true 成功 | false 失败",
        },
        {
          name: "searchMessage",
          explain:
            "(res)=>{}, 每次搜索结果会返回 res.success true 成功 | false 失败",
        },
        {
          name: "close",
          explain: "(xy,isClickOk)=>{},xy坐标，isClickOk true代表点击确定按钮",
        },
      ],
    };
  },
  created() {},

  mounted() {},
  beforeDestroy() {
    this.GetXY && this.GetXY.destroy();
  },
  methods: {
    close(xy,isClickOk) {
      // isClickOk true代表点击的确定按钮
      console.log(xy,isClickOk);
    },
    /**
     * @description: 打开获取坐标弹窗
     * @param {*} x
     * @param {*} y
     * @return {*}
     */
    openGetxy(x, y) {
      if ((x, y)) {
        this.$refs.yhxy_ref.init(x, y);
      } else {
        this.$refs.yhxy_ref.init();
      }
    },
    /**
     * @description: 搜索提示消息
     * @param {Boolean} res.success true 成功 | false 失败
     */
    searchMessage(res) {
      console.log("searchMessage", res);
    },
    /**
     * @description: 定位消息
     * @param {Boolean} res.success true 成功 | false 失败
     */
    locationMessage(res) {
      console.log("locationMessage", res);
    },
    /**
     * @description: 根据函数获取xy
     * @param {*} x
     * @param {*} y
     * @return {*}
     */
    funGetxy(x, y) {
      this.GetXY = GetCoordinate({
        // lat: y,
        // lng: x,
        searchHide: false,
        locationMessage: (res) => {
          console.log("locationMessage", res);
        },
        searchMessage: (res) => {
          console.log("searchMessage", res);
        },
        close: (xy,isClickOk) => {
          console.log(xy,isClickOk);
        },
      });
    },
    funGetxy2(x, y) {
      GetCoordinate({
        lat: y,
        lng: x,
        searchHide: true,
        yhGetxyClass: "test",
        locationMessage: (res) => {
          console.log("locationMessage", res);
        },
        searchMessage: (res) => {
          console.log("searchMessage", res);
        },
        close: (xy) => {
           // isClickOk true代表点击的确定按钮
          console.log(xy);
        },
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.yh-button+.yh-button{
  margin-left: 12px;
}
</style>