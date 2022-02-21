<!--
 * @Author: daidai
 * @Date: 2021-09-16 09:20:55
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-09 17:53:12
 * @FilePath: \yhht-ui\yhht-ui\packages\skeleton\src\item.vue
-->
<template>
  <div :class="['yh-skeleton__item', `yh-skeleton__${variant}`]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script>
  import ImgPlaceholder from './img-placeholder';

  export default {
    name: 'YhSkeletonItem',
    props: {
      variant: {
        type: String,
        default: 'text'
      }
    },
    components: {
      [ImgPlaceholder.name]: ImgPlaceholder
    }
  };
</script>
<style scoped>
.yh-skeleton__item {
    background: #f2f2f2;
    display: inline-block;
    height: 16px;
    border-radius: 4px;
    width: 100%
}

.yh-skeleton__circle {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    line-height: 36px
}

.yh-skeleton__circle--lg {
    width: 40px;
    height: 40px;
    line-height: 40px
}

.yh-skeleton__circle--md {
    width: 28px;
    height: 28px;
    line-height: 28px
}

.yh-skeleton__button {
    height: 40px;
    width: 64px;
    border-radius: 4px
}

.yh-skeleton__p {
    width: 100%
}

.yh-skeleton__p.is-last {
    width: 61%
}

.yh-skeleton__p.is-first {
    width: 33%
}

.yh-skeleton__text {
    width: 100%;
    height: 13px
}

.yh-skeleton__caption {
    height: 12px
}

.yh-skeleton__h1 {
    height: 20px
}

.yh-skeleton__h3 {
    height: 18px
}

.yh-skeleton__h5 {
    height: 16px
}

.yh-skeleton__image {
    width: unset;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 0
}

.yh-skeleton__image svg {
    fill: #DCDDE0;
    width: 22%;
    height: 22%
}
</style>