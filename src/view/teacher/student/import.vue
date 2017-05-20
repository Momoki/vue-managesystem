<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">导入学生信息</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>学生管理</el-breadcrumb-item>
        <el-breadcrumb-item>导入学生信息</el-breadcrumb-item>
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
            <el-button size="small" type="primary">点击导入</el-button>
            <div slot="tip" class="el-upload__tip">只能上传xls文件</div>
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
      fileList: [{name: 'food.xls', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.xls', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      // fileList:[],
      upload:{
        action: ''
      }
    }
  },
  methods: {

  },
  mounted() {
    urlConfig("classList");
  }
}
</script>
