<!--
 * @Author: daidai
 * @Date: 2021-09-18 16:01:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-28 15:03:39
 * @FilePath: \yhht-ui\src\views\com-js\Colors.vue
-->
<template>
  <div class="colors-trans">
    <div class="tipdefault">
        <p>这里 把colors赋值给了window.yhColors=colorS 直接控制台可以调试，yhColors['you want']</p>
    </div>
    <h4>引入</h4>
    <code-light
      text="import { colorS } from 'yhht-ui/src/util';"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>

    <h4>16进制颜色转rgb颜色</h4>
    <p>16进制必须#FFFFFF 这种格式</p>
    <div class="zhuanhuan">
      <el-input v-model="color1">
        <el-button slot="append" @click="oncolor1">转换</el-button></el-input
      >
      <p>{{ color1Tran }}</p>
    </div>

    <code-light
      :text="text1"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>

    <h4>rgb颜色转十六进制颜色</h4>
    <p>要数字类型</p>
    <div class="zhuanhuan">
      <el-input v-model="color2">
        <el-button slot="append" @click="oncolor2">转换</el-button></el-input
      >
      <p>{{ color2Tran }}</p>
    </div>
    <code-light
      :text="text2"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>

    <h4>加深</h4>
    <p>两个参数：第一个 16进制颜色 || 第二个 颜色加深多少0-1之间，默认0.1</p>
    <p>如果参数没问题，结果没变化就是深得不能再深了</p>
    <code-light
      :text="text3"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>

    <h4>变淡</h4>
    <p>两个参数：第一个 16进制颜色 || 第二个 颜色加深多少0-1之间，默认0.1</p>
    <p>如果参数没问题，结果没变化就是淡得不能再淡了</p>
    <code-light
      :text="text4"
      wrapClass="codes"
      codeType="javascript"
    ></code-light>
  </div>
</template>

<script>
import { colorS } from "yhht-ui/src/util";
window.yhColors=colorS
export default {
  data() {
    return {
      text1: `let color= colorS.HexToRgb("#FFFFFF");
console.log(color)  //输出 [255, 255, 255]`,
      text2: `let color2= colorS.RgbToHex(255,255,255);
console.log(color2)  //输出 #ffffff`,
      text3: `let color3= colorS.darken("#FFFFFF",0.1);
console.log(color3) //输出 #e5e5e5`,
      text4: `let color4= colorS.lighten("#000000",0.1);
console.log(color4) //输出 #191919`,
      color1: "#FFFFFF",
      color1Tran: "[ 255, 255, 255 ]",
      color2: "255,255,255",
      color2Tran: "#ffffff ",
    };
  },
  created() {
    this.ColorConversion();
  },
  methods: {
    oncolor1() {
      this.color1Tran = colorS.HexToRgb(this.color1);
    },
    oncolor2() {
      let arr = this.color2.split(",")
      this.color2Tran = colorS.RgbToHex(arr[0],arr[1],arr[2]);
    },
    ColorConversion() {
      let color = colorS.HexToRgb("#FFFFFF");
      console.log(color); //输出 [255, 255, 255]

      let color2 = colorS.RgbToHex(255, 255, 255);
      console.log(color2); //输出 #ffffff

      let color3 = colorS.darken("#FFFFFF", 0.1);
      console.log(color3); //输出 #e5e5e5

      let color4 = colorS.lighten("#000000");
      console.log(color4); //输出 #191919
    },
  },
};
</script>
<style lang='scss' scoped>
.colors-trans {
  .zhuanhuan {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    align-items: center;
    :deep(.el-input)  {
      max-width: 200px;
      margin-right: 10px;
    }
  }
}
</style>