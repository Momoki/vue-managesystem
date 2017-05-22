<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">实习周记</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>实习管理</el-breadcrumb-item>
        <el-breadcrumb-item>实习周记</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list">
      <div class="search">
        <el-form :model="searchform">
         <el-row>
           <el-col :span="8">
             <el-form-item label="学号">
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
        <el-table-column prop="student.number" label="学号" width="120">
        </el-table-column>
        <el-table-column prop="student.name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="位于" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="content" label="内容" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="create_time" label="发布时间" show-overflow-tooltip>
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
      tableData: [],
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
    }
  }
}
</script>
