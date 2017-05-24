<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">我的短学期</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>短学期管理</el-breadcrumb-item>
        <el-breadcrumb-item>我的短学期</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list search">
      <el-form>
       <el-row>
         <el-col :span="24">
           暂无选课记录
         </el-col>
         <!-- <el-col :span="24">
           你还没有开始实习。
         </el-col> -->
       </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentPage: 1,
      fileList:[],
      upload:{
        action: ''
      }
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>
