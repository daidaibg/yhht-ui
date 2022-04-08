/*
 * @Author: daidai
 * @Date: 2022-02-09 14:50:27
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-10 14:08:15
 * @FilePath: \yhht-ui\src\lib\readText.js
 */
export const loadFile = function (name) { // name为文件所在位置
    let xhr = new XMLHttpRequest(),
    okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', "/yhht-ui/"+name, false);

    xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8

    xhr.send(null);

    return xhr.status === okStatus ? xhr.responseText : null;

}
