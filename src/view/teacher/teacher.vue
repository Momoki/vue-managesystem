<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">活动详情</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="background-color:#fff;padding:20px;margin:18px;margin-top:0">
      <el-form :model="form" >
        <el-row class="search">
          <el-col :span="6">
            <el-form-item label="用户名">
              <el-input v-model="form.user" placeholder="审批人"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="学号">
              <el-input v-model="form.user" placeholder="审批人"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="班级">
              <el-select v-model="value5" multiple placeholder="请选择">
               <el-option
                 v-for="item in options"
                 :label="item.label"
                 :value="item.value">
               </el-option>
             </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button type="primary">搜索</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-table
       :data="tableData"
       border
       tooltip-effect="dark"
       style="width: 100%"
       @selection-change="handleSelectionChange">
       <el-table-column
         type="selection"
         width="55">
       </el-table-column>
       <el-table-column
         label="日期"
         width="120">
         <template scope="scope">{{ scope.row.date }}</template>
       </el-table-column>
       <el-table-column
         prop="name"
         label="姓名"
         width="120">
       </el-table-column>
       <el-table-column
         prop="address"
         label="地址"
         show-overflow-tooltip>
       </el-table-column>
     </el-table>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        user: ''
      },
      tableData: [{
         date: '2016-05-02',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1518 弄'
       }, {
         date: '2016-05-04',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1517 弄'
       }, {
         date: '2016-05-01',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1519 弄'
       }, {
         date: '2016-05-03',
         name: '王小虎',
         address: '上海市普陀区金沙江路 1516 弄'
       }],
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: []
    }
  }
}
</script>

<style lang="css">
.search {
  max-width: 1300px;
}
.search .el-form-item .el-form-item__label{
  width: 30%;
}
.search .el-form-item .el-form-item__content{
  display: inline-block;
  width: 70%;
}
.search button{
  margin-left: 20px;
}
@media screen and (max-width: 800px) {
  .el-col-6{
    width: 100%;
  }
  .search .el-form-item .el-form-item__label{
    width: 100%;
    text-align: left;
  }
  .search .el-form-item .el-form-item__content{
    width: 100%;
  }
}
</style>
