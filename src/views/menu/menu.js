export const menuList = [
    {
     title: "开发指南",
     sub: [
       {
         name: "安装使用",
         url: '/components/installation',
       },
       {
         name: "主题样式",
         url: "/components/theme",
       },
        {
         name: "vscode插件",
         url: "/components/plugin",
       },
     ],
   },
   {
     title: "组件",
     tip: "Basic",
     sub: [
       {
         name: "icon",
         url: "/components/icon",
       },
       {
         name: "按钮button",
         url: "/components/buttons",
       },
       {
         name: "获取坐标coordinates",
         url: "/components/coordinates",
       },
       {
         name: "加载状态loading",
         url: "/components/loading",
       },
       {
         name: "拖拽弹窗drag",
         url: "/components/drag",
       },
       {
         name: "上传图片列表upload img",
         url: "/components/upload",
       },
     ],
   },
   {
     tip: "结合element",
     sub: [
       {
         name: "引入和使用",
         url: "/components/installLinkEle",
       },
       {
         name: "获取xy坐标",
         url: "/components/getxy",
       },

       {
         name: "表格加分页",
         url: "/components/table-ele",
       },
       {
         name: "树形下拉框",
         url: "/components/select-tree",
       },
       // {
       //   name: "地图搜索框",
       //   url: "/components/search",
       // },
     ],
   },
   {
     title: "JS",
     tip: "Basic",
     sub: [
       {
         name: "一些js工具",
         url: "/components/utils",
       },
       {
         name: "页面进度条",
         url: "/components/yhProgress",
       },
       {
         name: "树形数据转换",
         url: "/components/tree-js",
       },
  
     ],
   },

   //  {
   //   title: "test",
   //   tip:"Basic",
   //   sub: [
   //     {
   //       name: "测试md",
   //       url: "/components/test-md",
   //     },

   //   ],
   // },
 ]
 let menuPathList =[]
 for (let index = 0; index < menuList.length; index++) {
    const element = menuList[index];
    element.sub.forEach(item=>{
        menuPathList.push(item)
    })
}
 export {menuPathList} 