export default  {
    dragtext: `<template>

    <yh-button theme="primary" @click="openDrag">打开弹窗</yh-button>
    <yh-button theme="primary" @click="visible2=true">遮罩弹窗</yh-button>


    <yh-drag
        :visible.sync="visible"
        :width="600"
        title="弹窗"
        titleAlign="center"
        :showClose="true"
        :borderRadius="10"
        :model="false"
        
      >
        <div class="content">内容</div>
      </yh-drag>

      <yh-drag
      :visible.sync="visible2"
      :width="600"
      title="遮罩弹窗"
      :borderRadius="10"
      :model="true"
    >
      <div class="content">遮罩弹窗内容</div>
    </yh-drag>
</template>

<script>
    export default {
        data() {
            return {
                visible:false,
                visible2:false,
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