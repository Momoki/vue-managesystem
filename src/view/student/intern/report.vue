<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">上传附件简历</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>实习管理</el-breadcrumb-item>
        <el-breadcrumb-item>我的实习</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list search">
      <el-form>
       <el-row>
         <el-col :span="24">
           <el-form-item label="实习公司">
             杭州xx网络技术有限公司
           </el-form-item>
           <el-form-item label="实习岗位">
             前端开发
           </el-form-item>
           <el-form-item label="实习状态">
             已完成实习，未提交报告
           </el-form-item>
           <el-form-item label="实习报告">
             <el-upload
              class="upload-demo"
              :action="upload.action"
              :file-list="fileList">
              <el-button size="small" type="primary">上传报告</el-button>
              <!-- <div slot="tip" class="el-upload__tip">上传doc文件</div> -->
            </el-upload>
           </el-form-item>
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
