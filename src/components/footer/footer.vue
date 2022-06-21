<template>
    <div class='footer'>
        <div class="footer_content">
            <div class="footer_item">
                <div class="title">
                    链接
                </div>
                <a href="http://www.eheretop.com/" target="_blank" class="link">主页</a>

            </div>
            <div class="footer_item">
                <div class="title">
                    其他
                </div>
                <a href="http://www.eheretop.com:18080/yhht-plus" target="_blank" class="link">vue3版本</a>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    methods: {
        init() {
        },
    },
    created() {

    },
    mounted() {

    },
    beforeDestroy() {
    },
}
</script>

<style lang='scss' scoped>
.footer {
    padding: 24px;
    position: relative;
    background-color: var(--bg-color-footer);
    // box-shadow: var(--footer-box-shadow);
    margin-top: 64px;
    .footer_content {
        display: flex;
    }

    .footer_item {
        width: 192px;
        padding: 24px;
        box-sizing: border-box;
        border-radius: 9px;
        // background: var(--bg-color-code);
        // border: 1px solid var(--component-border);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        right: 48px;
        top: 40px;
        text-align: left;

        .title {
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
            margin-top: 0px;
            margin-bottom: 24px;
            color: var(--text-placeholder);
        }
        .link {
            cursor: pointer;
            text-decoration: none;
            color: var(--text-primary);
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 16px;
            transition: all .2s linear;
            &:hover{
                    color: var(--yh-brand-color-8)
            }
        }
    }
}
</style>