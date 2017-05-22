<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">上传附件简历</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>简历管理</el-breadcrumb-item>
        <el-breadcrumb-item>上传附件简历</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list">
      <el-form>
       <el-row>
         <el-col :span="24">
           <el-upload
            class="upload-demo"
            :action="upload.action"
            :file-list="fileList">
            <el-button size="small" type="primary">上传简历</el-button>
            <div slot="tip" class="el-upload__tip">上传PDF或doc文件</div>
          </el-upload>
         </el-col>
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
