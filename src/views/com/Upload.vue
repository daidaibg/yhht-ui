<!--
 * @Author: daidai
 * @Date: 2022-01-06 10:54:05
 * @LastEditors: daidai
 * @LastEditTime: 2022-01-10 09:14:57
 * @FilePath: \yhht-ui\src\views\com\Upload.vue
-->
<template>
  <div>
    <h2>上传图片列表</h2>
    <p>拥有上传状态，上传成功与失败后会删除上传图片，根据接口状态展示回显</p>
 <h3>例子</h3>
    <code-wrap>
      
    <yh-upload-img
      :action="action"
      :multiple="false"
      autoUpload
      :headers="{ token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' }"
      @deleteFile="deleteFile"
      @imageViewer="imageViewer"
      :onSuccess="onSuccess"
      :onError="onError"
      :fileOption="fileOption"
      :fileList="fileList"
    >
    </yh-upload-img>
      <div slot="code">
        <p>&nbsp; &nbsp;<span style="color: rgb(128, 0, 0);">&lt;yh-upload-img</span></p><p>&nbsp; &nbsp; &nbsp; :<span style="color: rgb(255, 0, 0);">action</span>="action"</p><p>&nbsp; &nbsp; &nbsp; :<span style="color: rgb(255, 0, 0);">multiple</span>="<span style="color: rgb(0, 0, 255);">false</span>"</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(255, 0, 0);">autoUpload</span></p><p>&nbsp; &nbsp; &nbsp; :<span style="color: rgb(255, 0, 0);">headers</span>="{ token: <span style="color: rgb(163, 21, 21);">'test test test test'</span> }"</p><p>&nbsp; &nbsp; &nbsp; @<span style="color: rgb(255, 0, 0);">deleteFile</span>="deleteFile"</p><p>&nbsp; &nbsp; &nbsp; @<span style="color: rgb(255, 0, 0);">imageViewer</span>="imageViewer"</p><p>&nbsp; &nbsp; &nbsp; :<span style="color: rgb(255, 0, 0);">onSuccess</span>="onSuccess"</p><p>&nbsp; &nbsp; &nbsp; :<span style="color: rgb(255, 0, 0);">fileOption</span>="fileOption"</p><p>&nbsp; &nbsp; &nbsp; :<span style="color: rgb(255, 0, 0);">fileList</span>="fileList"</p><p>&nbsp; &nbsp; <span style="color: rgb(128, 0, 0);">&gt;</span></p><p>&nbsp; &nbsp; <span style="color: rgb(128, 0, 0);">&lt;/yh-upload-img&gt;</span></p>
        <br/>
  <p><span style="color: rgb(175, 0, 219);">export</span> <span style="color: rgb(175, 0, 219);">default</span> {</p><p>&nbsp; <span style="color: rgb(121, 94, 38);">data</span>() {</p><p>&nbsp; &nbsp; <span style="color: rgb(175, 0, 219);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">action:</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(163, 21, 21);">"https://jsonplaceholder.typicode.com/posts/"</span>,</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">fileList:</span> [],</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">fileOption:</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">id:</span> <span style="color: rgb(163, 21, 21);">"id"</span>,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">url:</span> <span style="color: rgb(163, 21, 21);">"filePath"</span>,</p><p>&nbsp; &nbsp; &nbsp; },</p><p>&nbsp; &nbsp; };</p><p>&nbsp; },</p><p>&nbsp; <span style="color: rgb(121, 94, 38);">created</span>() {},</p><p><br></p><p>&nbsp; <span style="color: rgb(121, 94, 38);">mounted</span>() {},</p><p>&nbsp; <span style="color: rgb(0, 16, 128);">methods:</span> {</p><p>&nbsp; &nbsp; <span style="color: rgb(121, 94, 38);">deleteFile</span>(<span style="color: rgb(0, 16, 128);">file</span>) {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">console</span>.<span style="color: rgb(121, 94, 38);">log</span>(<span style="color: rgb(0, 16, 128);">file</span>);</p><p>&nbsp; &nbsp; },</p><p>&nbsp; &nbsp; <span style="color: rgb(121, 94, 38);">imageViewer</span>(<span style="color: rgb(0, 16, 128);">file</span>) {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">console</span>.<span style="color: rgb(121, 94, 38);">log</span>(<span style="color: rgb(0, 16, 128);">file</span>);</p><p>&nbsp; &nbsp; },</p><p>&nbsp; &nbsp; <span style="color: rgb(121, 94, 38);">onSuccess</span>(<span style="color: rgb(0, 16, 128);">res</span>) {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">console</span>.<span style="color: rgb(121, 94, 38);">log</span>(<span style="color: rgb(0, 16, 128);">res</span>);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 0, 255);">this</span>.<span style="color: rgb(0, 16, 128);">fileList</span>.<span style="color: rgb(121, 94, 38);">push</span>({</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">id:</span><span style="color: rgb(0, 0, 255);">new</span> <span style="color: rgb(38, 127, 153);">Date</span>().<span style="color: rgb(121, 94, 38);">getTime</span>(),</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">filePath:</span><span style="color: rgb(163, 21, 21);">'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; });</p><p>&nbsp; &nbsp; },</p><p>&nbsp; &nbsp; <span style="color: rgb(121, 94, 38);">onError</span>(<span style="color: rgb(0, 16, 128);">res</span>) {</p><p>&nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">console</span>.<span style="color: rgb(121, 94, 38);">log</span>(<span style="color: rgb(0, 16, 128);">res</span>);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 0, 255);">this</span>.<span style="color: rgb(0, 16, 128);">fileList</span>.<span style="color: rgb(121, 94, 38);">push</span>({</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">id:</span><span style="color: rgb(0, 0, 255);">new</span> <span style="color: rgb(38, 127, 153);">Date</span>().<span style="color: rgb(121, 94, 38);">getTime</span>(),</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(0, 16, 128);">filePath:</span><span style="color: rgb(163, 21, 21);">'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; });</p><p>&nbsp; &nbsp; },</p><p>&nbsp; },</p><p>};</p>
     </div>
    </code-wrap>
     <h3>参数</h3>
    <table class="tables">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>action</td>
        <td>必选参数，上传的地址</td>
        <td>string</td>
        <td>——</td>
      </tr>
      <tr>
        <td>headers</td>
        <td>设置上传的请求头部</td>
        <td>object</td>
        <td>-</td>
      </tr>
      <tr>
        <td>multiple</td>
        <td>是否支持多选文件</td>
        <td>boolean</td>
        <td>--</td>
      </tr>
      <tr>
        <td>data</td>
        <td>上传时附带的额外参数</td>
        <td>object</td>
        <td>--</td>
      </tr>
      <tr>
        <td>name</td>
        <td>上传的文件字段名</td>
        <td>string</td>
        <td>file</td>
      </tr>
      <td>with-credentials</td>
      <td>支持发送 cookie 凭证信息</td>
      <td>boolean</td>
      <td>false</td>
      <tr>
        <td>on-preview</td>
        <td>点击文件列表中已上传的文件时的钩子</td>
        <td>function(file)</td>
        <td>-</td>
      </tr>
      <tr>
        <td>on-remove</td>
        <td>文件列表移除文件时的钩子/td>
        <td>function(file, fileList)</td>
        <td>-</td>
      </tr>
      <tr>
        <td>on-success</td>
        <td>文件上传成功时的钩子</td>
        <td>function(response, file, fileList)</td>
        <td>-</td>
      </tr>
      <tr>
        <td>on-error</td>
        <td>文件上传失败时的钩子</td>
        <td>function(err, file, fileList)</td>
        <td>--</td>
      </tr>
      <tr>
        <td>on-progress</td>
        <td>文件上传时的钩子</td>
        <td>	function(event, file, fileList)</td>
        <td>--</td>
      </tr>
        <tr>
        <td>before-upload</td>
        <td>上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。</td>
        <td>function(file)</td>
        <td>--</td>
      </tr>
        <tr>
        <td>before-remove</td>
        <td>删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。</td>
        <td>function(file, fileList)</td>
        <td>--</td>
      </tr>
        <tr>
        <td>auto-upload</td>
        <td>是否在选取文件后立即进行上传</td>
        <td>boolean</td>
        <td>true</td>
      </tr>
        <tr>
        <td>http-request</td>
        <td>覆盖默认的上传行为，可以自定义上传的实现</td>
        <td>function</td>
        <td>--</td>
      </tr>
        <tr>
        <td>limit</td>
        <td>最大允许上传个数</td>
        <td>number</td>
        <td>--</td>
      </tr>
        <tr>
        <td>onExceed</td>
        <td>文件超出个数限制时的钩子</td>
        <td>function(files, fileList)</td>
        <td>--</td>
      </tr>
      
         <tr>
        <td>onExceedLength</td>
        <td>文件超出最大显示个数限制钩子</td>
        <td>function(files, fileList)</td>
        <td>--</td>
      </tr>
         <tr>
        <td>fileOption</td>
        <td>配置图片显示列表key 与 url</td>
        <td>Object</td>
        <td>{
        url: "url",
        id: "id",
      }</td>
      </tr>
         <tr>
        <td>fileList</td>
        <td>默认展示图片列表</td>
        <td>Array</td>
        <td>[]</td>
      </tr>
    </table>
    <h2>Events</h2>
    <table class="tables">
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>参数</th>
        <th>备注</th>
      </tr>
     
      <tr>
        <td>deleteFile</td>
        <td>点击删除按钮</td>
        <td>file 文件对象</td>
        <td></td>
      </tr>
      <tr>
        <td>imageViewer</td>
        <td>点击预览按钮</td>
        <td>file 文件对象</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      action:
        "https://jsonplaceholder.typicode.com/posts/",
      fileList: [],
      fileOption: {
        id: "id",
        url: "filePath",
      },
    };
  },
  created() {},

  mounted() {},
  methods: {
    deleteFile(file) {
      console.log(file);
    },
    imageViewer(file) {
      console.log(file);
    },
    onSuccess(res) {
      console.log(res);
        this.fileList.push({
            id:new Date().getTime(),
            filePath:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        });
    },
    onError(res) {
      console.log(res);
        this.fileList.push({
            id:new Date().getTime(),
            filePath:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        });
    },
  },
};
</script>
<style lang='' scoped>
</style>