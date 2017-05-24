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
           <el-col :span="24">
             <el-form-item label="周记时间">
               <el-date-picker
                 v-model="searchform.date"
                 type="week"
                 format="yyyy 第 WW 周"
                 placeholder="选择周">
               </el-date-picker>
             </el-form-item>
             <el-form-item label="周记内容">
               <el-input
                 v-model="searchform.content"
                 :rows="3"
                 placeholder="请输入内容"
                 type="textarea">
               </el-input>
             </el-form-item>
             <el-form-item label=" ">
               <div style="margin-left:-20px">
                 <el-button type="primary" @click="send"><i class="el-icon-loading" v-if="ajaxing"></i> 发布</el-button>
               </div>
             </el-form-item>

           </el-col>
         </el-row>
        </el-form>
      </div>
      <el-table :data="tableData" border tooltip-effect="dark" style="width: 100%">
        <!-- <el-table-column prop="number" label="学号" width="120">
        </el-table-column> -->
        <el-table-column prop="company" label="公司">
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
      ajaxing: false,
      searchform: {
        date: '', //学号
        content: '',
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
    },
    send(){
      let self = this;
      setTimeout(function(){
         self.$message({
           message: '保存成功',
           type: 'success'
         });
         self.tableData.push({
           company: '杭州xx网络技术有限公司',
           province: '浙江',
           content: self.searchform.content,
           create_time: '2017/5/23'
         })
         self.ajaxing = false;
      },1000);
    }
  }
}
</script>
