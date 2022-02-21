<!--
 * @Author: daidai
 * @Date: 2021-09-14 15:02:55
 * @LastEditors: daidai
 * @LastEditTime: 2021-12-07 10:56:21
 * @FilePath: \yhht-ui\yhht-ui\packages\loading\src\main.vue
-->
<template>
  <div :style="{ background:background }" :class="customClass" class="yh-loading-wrap" >
    <template v-if="type == 'datav'">
      <div class="yh-loading"  :class="customClass">
        <svg width="50px" height="50px">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="transparent"
            stroke-width="3"
            stroke-dasharray="31.415, 31.415"
            stroke="#02bcfe"
            stroke-linecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0, 25 25;360, 25 25"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke"
              values="#02bcfe;#3be6cb;#02bcfe"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="25"
            cy="25"
            r="10"
            fill="transparent"
            stroke-width="3"
            stroke-dasharray="15.7, 15.7"
            stroke="#3be6cb"
            stroke-linecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360, 25 25;0, 25 25"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke"
              values="#3be6cb;#02bcfe;#3be6cb"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        <div class="loading-tip">
          <slot />
        </div>
      </div>
    </template>
    <template v-else-if="type == 'lowKey'">
      <LowKeyLoading > <slot /></LowKeyLoading>
    </template>
  </div>
</template>

<script>
import LowKeyLoading from "./loading-home.vue";
export default {
  name: "yh-loading",
  components: { LowKeyLoading },
  props: {
    background: {
      type: String,
      default: () => "",
    },
    customClass: {
      type: String,
      default: () => "",
    },
    //选择类型
    //  默认 datav dataV风格
    // lowKey 四个点 纯css类型
    type: {
      type: String,
      default: () => "datav",
    },
  },
};
</script>