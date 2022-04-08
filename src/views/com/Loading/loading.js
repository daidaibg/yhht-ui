/*
 * @Author: daidai
 * @Date: 2022-02-11 14:11:02
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-11 14:20:35
 * @FilePath: \yhht-ui\src\views\com\Loading\loading.js
 */
export default {
    loadingCOde:`<template>
    <yh-loading :type="type" :background="background">加载中...</yh-loading>
</template>

    <script>
        export default {
            data() {
                return {
                    type: "lowKey",
                    background: "rgba(0,0,0,0.2)",
                };
            },
            created() {},
            mounted() {},
            methods: {
                qiehuan() {
                    if (this.type == "lowKey") {
                        this.type = "datav";
                    } else {
                        this.type = "lowKey";
                    }
                },
                qiehuanBackground() {
                    if (this.background == "rgba(0,0,0,0.2)") {
                        this.background = "rgba(40,220,200,0.2)";
                    } else {
                        this.background = "rgba(0,0,0,0.2)";
                    }
                },
            },
        };
    </script>`
}