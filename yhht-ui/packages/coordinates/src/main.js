/*
 * @Author: daidai
 * @Date: 2022-02-16 17:08:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-12 11:18:36
 * @FilePath: \yhht-ui\yhht-ui\packagesEle\getXY\src\main.js
 */
import Vue from 'vue';
import Main from './main.vue';
import {defProps} from './config'
let GETXY = Vue.extend(Main);
let instance;
let defPropsKeys = Object.keys(defProps)
var GetCoordinate = function (options) {
    if (Vue.prototype.$isServer) return;
    options = options || {};
    function emitMessage(type, param,treeParam=undefined) {
        options[type] && options[type]( param,treeParam)
        if (type == 'close') {
            // instance.$destroy();
            document.body.removeChild(instance.$el);
            // instance.visible =false
        }
    }
    // console.log(options,props,Object.prototype.toString.call(options.searchHide))
    if(!instance){
        // let props = {...defProps};
        let props = JSON.parse(JSON.stringify(defProps)) 
        defPropsKeys.forEach(key=>{
            if (Object.hasOwnProperty.call(options, key)) {
                props[key]=options[key]
            }
        })
        instance = new GETXY({
            data: {
                emitMessage,
                mapId:'yh-map-instance',
                yhGetxyClass:options.yhGetxyClass||"",
            },
            propsData:props
        });
        instance.$mount();
    }else{
        instance.emitMessage=emitMessage;
        instance.yhGetxyClass=options.yhGetxyClass||""
        defPropsKeys.forEach(key=>{
            if (Object.hasOwnProperty.call(options, key)) {
                instance[key]=options[key]
            }
        })
    }
    instance.destroy=()=>{
        instance&&instance.$destroy()
        instance=null
        return null
    }
    instance.init(options.lng,options.lat)
    document.body.appendChild(instance.$el);
    return instance;
};


export default GetCoordinate;