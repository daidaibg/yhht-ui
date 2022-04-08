/*
 * @Author: daidai
 * @Date: 2022-02-10 14:03:23
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-14 09:32:39
 * @FilePath: \yhht-ui\src\views\com-js\utils-code.js
 */
export default {
    drag: `<template>
    <!-- 外层元素 -->
    <div style="width: 100%; height: 150px; position: relative" ref="dragWrapDom">
        <!-- 拖动自己本身 -->
        <div
            @mousedown.prevent="dragItself" ref="drag_itself" style="position: absolute; top: 10px" class="drag_itself"
        >
            拖动本身
            <span style="font-size: 12px"></span>
        </div>
        <!-- 拖动父级或其他元素都可以 -->
        <div
            ref="drag_wrap"
            style="position: absolute;padding: 10px;border: solid 1px rgb(192 187 187);border-radius: 8px;left: 200px;"
        >
            <div @mousedown.prevent="dragWrap" class="drag_itself">
            拖动父级
                <span style="font-size: 12px">(控制最大x,y)</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { yhDrag } from 'yhht-ui/src/util'
    export default {
        data() {
            };
        },
        methods: {
            dragItself(e) {
             return yhDrag({ e: e, dom: this.$refs.drag_itself });//注意参数是一个对象
            },
            dragWrap(e) {
                const wrapDom = this.$refs.dragWrapDom;
                const dragDom = this.$refs.drag_wrap;
                let maxX = wrapDom.offsetWidth-dragDom.offsetWidth;
                let maxY = wrapDom.offsetHeight-dragDom.offsetHeight;
                let range = [0, maxX, 0, maxY]; //[minX,maxX, minY,maxY]
                return yhDrag({ e: e, dom: dragDom, range });
            },
        },
    };
</script>
`,
dataType:`import { isString,isObject,isHtmlElement,isFunction,isUndefined,isDefined,isArray } from 'yhht-ui/src/util';   
// 以下皆是返回 true || false
let stringFlag = isString("字符串"); //ture   是否是字符串
let objectFlag = isObject({
  a: 1,
}); //ture   是否是对象
let arrayFlag = isArray([]); //ture   是否是数组
let elementFlag = isHtmlElement(document.querySelector("p")); //ture   是否是dom元素
let functionFlag = isFunction(function name(params) {}); //ture   是否是函数
let undefinedFlag = isUndefined(); //ture   是否是字符串
let definedFlag = isDefined("常量"); //ture   是否是常量`
}