<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">选课列表</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>短学期管理</el-breadcrumb-item>
        <el-breadcrumb-item>选课列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list">
      <div class="search">
        <el-form :model="searchform">
         <el-row>
           <el-col :span="8">
             <el-form-item label="课程关键词">
               <el-input v-model="searchform.number"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="8">
             <div style="color:#fff">&nbsp;</div>
           </el-col>
           <el-col :span="8">
             <el-button type="primary" @click="loadData">搜索</el-button>
           </el-col>
         </el-row>
        </el-form>
      </div>
      <el-table :data="tableData" border tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="name" label="课程名称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="company" label="合作公司" width="200" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="content" label="内容" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="create_time" label="课程时间" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="操作" width="120">
          <template scope="scope">
           <el-button
             size="small"
             @click="send">
             选课
           </el-button>
           </template>
        </el-table-column>
      </el-table>
      <el-pagination v-if="tableData[0]"
       @current-change="handleCurrentChange"
       :current-page.sync="searchform.page_index"
       :page-size="10"
       layout="prev, pager, next"
       :page-count="searchform.total_pages">
      </el-pagination>
   </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchform: {
        number: '', //学号
        page_index: 1,
        total_pages: 1,
      },
      tableData: [{
        name: '信息安全',
        company: '杭州xx信息安全有限公司',
        province: '浙江',
        content: '教授基本的信息安全知识',
        create_time: '2017/02/21-2017/03/04'
      },],
    }
  },
  methods: {
    loadData() {
      let self = this;
      axios.get(urlConfig("weekly"), {
          params: self.searchform
        })
        .then(function(res) {
          self.tableData = res.data.data.items;
          self.searchform.total_pages =  res.data.data.total_pages
          self.searchform.page_index = res.data.data.page_index
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleCurrentChange(val) {
      this.searchform.currentPage = val;
      this.loadData();
    },
    send(){
      this.$message({
        message: '投递成功',
        type: 'success'
      });
    }
  }
}
</script>
