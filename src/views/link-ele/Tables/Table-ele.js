/*
 * @Author: daidai
 * @Date: 2022-02-11 14:22:00
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-11 14:22:01
 * @FilePath: \yhht-ui\src\views\link-ele\Tables\Table-ele.js
 */
export default {
    codeText:` <yh-table-pag :data="tableData" @getData="getData"
    :total="total"
    size="small"
    loading="loading"
    max-height="300px"
    >
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
</yh-table-pag>

export default { 
   data() { 
     return { 
       tableData: [], 
       total:0, 
       loading:false
    };
  },
   methods: { 
     getData(pagData) { 
       this.loading=true
       this.pagData=pagData
       //此处写接口
       setTimeout(() => { 
            this.loading=false
            this.total = 100
            this.tableData=this.randomData() 
       }, 500); 
    },
     randomData(){ 
         let arr= [] 
         console.log(this.pagData.pageSize) 
         for(var i=0;i<this.pagData.pageSize;i++){ 
             arr.push({ 
                 date: "2016-05-0"+this.pagData.currentPage+i , 
                 name: "王小虎"+this.pagData.currentPage+i , 
                 address: '上海市普陀区金沙江路 151\${i} 弄', 
             }) 
        }
         console.log(arr) 
         return arr
    }
  },
};`
}