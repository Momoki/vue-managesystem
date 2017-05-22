<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">短学期列表</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>短学期管理</el-breadcrumb-item>
        <el-breadcrumb-item>短学期列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list">
      <div class="search">
        <el-form :model="searchform">
         <el-row>
           <el-col :span="8">
             <el-form-item label="课程名称">
               <el-input v-model="searchform.name"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="8">
             <el-button type="primary" @click="loadData">搜索</el-button>
           </el-col>
         </el-row>
        </el-form>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="课程名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="合作公司"
          prop="company">
        </el-table-column>
        <el-table-column
          label="简介"
          prop="content">
        </el-table-column>
        <el-table-column
          label="状态"
          prop="status">
        </el-table-column>
        <el-table-column
          label="操作" width="160">
          <template scope="scope">
           <el-button
             size="small"
             @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
           <el-button
             size="small"
             type="danger"
             @click="handleDelete(scope.$index, scope.row)">删除</el-button>
         </template>
        </el-table-column>
      </el-table>
      <el-pagination
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       :current-page.sync="currentPage"
       :page-size="10"
       layout="prev, pager, next"
       :page-count="20">
      </el-pagination>
   </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentPage: 1,
      searchform: {
        number: '', //学号
        date: ''
      },
      tableData: [{
        id: '12987122',
        name: '信息安全课',
        company:'安恒网络',
        content: '教授信息安全的基本知识',
      }],
      pickerOptions: {
         shortcuts: [{
           text: '最近一周',
           onClick(picker) {
             const end = new Date();
             const start = new Date();
             start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
             picker.$emit('pick', [start, end]);
           }
         }, {
           text: '最近一个月',
           onClick(picker) {
             const end = new Date();
             const start = new Date();
             start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
             picker.$emit('pick', [start, end]);
           }
         }, {
           text: '最近三个月',
           onClick(picker) {
             const end = new Date();
             const start = new Date();
             start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
             picker.$emit('pick', [start, end]);
           }
         }],
         disabledDate(time){
           let beginDateVal = Date.now();
           if (beginDateVal) {
             return time.getTime() > beginDateVal;
           }
         }
       }
    }
  },
  methods: {
    loadData() {
      console.log(this.searchform);
      axios.get(urlConfig('x'), {
          params: this.searchform
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
