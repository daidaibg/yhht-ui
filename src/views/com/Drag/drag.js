/*
 * @Author: daidai
 * @Date: 2022-02-11 14:02:24
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-11 14:19:53
 * @FilePath: \yhht-ui\src\views\com\Drag\drag.js
 */
export default  {
    dragtext: `<template>
    <yh-drag :visible.sync="visible" :width="600" title="弹窗" titleAlign="center">
        <div class="content">
            内容
        </div>
    </yh-drag>
</template>

<script>
    export default {
        data() {
            return {
                visible:false
            }
        },
        methods: {
            openDrag(){
                this.visible = true
            }
        }
    }
</script>`
}