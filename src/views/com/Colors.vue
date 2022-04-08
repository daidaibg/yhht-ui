<!--
 * @Author: daidai
 * @Date: 2021-09-18 16:01:52
 * @LastEditors: daidai
 * @LastEditTime: 2021-10-29 16:10:49
 * @FilePath: \yhht-ui\src\views\com\Colors.vue
-->
<template>
  <div class="yhProgress">
    <h2 id="icon-tu-biao">颜色转换</h2>
    <h3>引入</h3>
    <div class="code_wrap">
        <p><span style="color: rgb(175, 0, 219);">import</span>&nbsp;{&nbsp;<span style="color: rgb(0, 16, 128);">colorS</span>&nbsp;}&nbsp;<span style="color: rgb(175, 0, 219);">from</span>&nbsp;<span style="color: rgb(163, 21, 21);">"yhht-ui/src/util"</span>;</p>
    </div>
    <h3>16进制颜色转rgb颜色</h3>
     <p>16进制必须#FFFFFF 这种格式</p>
      <div class="code_wrap">
          <p><span style="color: rgb(0, 0, 255);">let</span>&nbsp;<span style="color: rgb(0, 16, 128);">color</span>=&nbsp;<span style="color: rgb(0, 16, 128);">colorS</span>.<span style="color: rgb(121, 94, 38);">HexToRgb</span>(<span style="color: rgb(163, 21, 21);">"#FFFFFF"</span>);</p>
            <p><span style="color: rgb(0, 16, 128);">console</span>.<span style="color: rgb(121, 94, 38);">log</span>(<span style="color: rgb(0, 16, 128);">color</span>)&nbsp;&nbsp;<span style="color: rgb(0, 128, 0);">//输出&nbsp;[255,&nbsp;255,&nbsp;255]</span></p>
      </div>
    <h3>rgb颜色转十六进制颜色</h3>
      <div class="code_wrap">
          <p><span style="color: rgb(175, 0, 219);"></span><span style="color: rgb(0, 0, 255);">let</span>&nbsp;<span style="color: rgb(0, 16, 128);">color2</span>=&nbsp;<span style="color: rgb(0, 16, 128);">colorS</span>.<span style="color: rgb(121, 94, 38);">RgbToHex</span>(<span style="color: rgb(9, 134, 88);">255</span>,<span style="color: rgb(9, 134, 88);">255</span>,<span style="color: rgb(9, 134, 88);">255</span>);</p>
            <p><span style="color: rgb(0, 16, 128);">console</span>.<span style="color: rgb(121, 94, 38);">log</span>(<span style="color: rgb(0, 16, 128);">color2</span>)&nbsp;&nbsp;<span style="color: rgb(0, 128, 0);">//输出&nbsp;#ffffff</span></p>
      </div>

    <h3>加深</h3>
     <p>两个参数：第一个 16进制颜色 || 第二个 颜色加深多少0-1之间，默认0.1</p>
     <p>如果参数没问题，结果没变化就是深得不能再深了</p>
      <div class="code_wrap">
          <p><span style="color: rgb(175, 0, 219);"></span><span style="color: rgb(0, 0, 255);">let</span>&nbsp;<span style="color: rgb(0, 16, 128);">color3</span>=&nbsp;<span style="color: rgb(0, 16, 128);">colorS</span>.<span style="color: rgb(121, 94, 38);">darken</span>(<span style="color: rgb(163, 21, 21);">"#FFFFFF"</span>,<span style="color: rgb(9, 134, 88);">0.1</span>);</p>
        <p><span style="color: rgb(0, 16, 128);">console</span>.<span style="color: rgb(121, 94, 38);">log</span>(<span style="color: rgb(0, 16, 128);">color3</span>)&nbsp;<span style="color: rgb(0, 128, 0);">//输出&nbsp;#e5e5e5</span></p>
      </div>

    <h3>变淡</h3>
     <p>两个参数：第一个 16进制颜色 || 第二个 颜色加深多少0-1之间，默认0.1</p>
      <p>如果参数没问题，结果没变化就是淡得不能再淡了</p>
      <div class="code_wrap">
          <p><span style="color: rgb(175, 0, 219);"></span><span style="color: rgb(0, 0, 255);">let</span>&nbsp;<span style="color: rgb(0, 16, 128);">color4</span>=&nbsp;<span style="color: rgb(0, 16, 128);">colorS</span>.<span style="color: rgb(121, 94, 38);">lighten</span>(<span style="color: rgb(163, 21, 21);">"#000000"</span>,<span style="color: rgb(9, 134, 88);">0.1</span>);</p>
        <p><span style="color: rgb(0, 16, 128);">console</span>.<span style="color: rgb(121, 94, 38);">log</span>(<span style="color: rgb(0, 16, 128);">color4</span>)&nbsp;<span style="color: rgb(0, 128, 0);">//输出&nbsp;#191919</span></p>
      </div>
  </div>
</template>

<script>
import { colorS } from "yhht-ui/src/util";
export default {
  data() {
    return {};
  },
  created() {
      this.ColorConversion()
  },
  methods: {
     ColorConversion(){
        let color= colorS.HexToRgb("#FFFFFF");
        console.log(color)  //输出 [255, 255, 255]

        let color2= colorS.RgbToHex(255,255,255);
        console.log(color2)  //输出 #ffffff

         let color3= colorS.darken("#FFFFFF",0.1);
        console.log(color3) //输出 #e5e5e5

    let color4= colorS.lighten("#000000");
        console.log(color4) //输出 #191919
     },
  },
};
</script>
<style lang='scss' scoped>
</style>