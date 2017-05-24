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
           <el-col :span="8">
             <a href="/#/teacher/shortterm/add"><el-button type="primary">添加短学期</el-button></a>
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
          label="时间"
          prop="date">
        </el-table-column>
        <el-table-column
          label="地点"
          prop="loca">
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
       :page-count="10">
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
        name: 'zbrush体验课',
        company:'GA游戏教育',
        content: 'zbrush角色头部制作',
        loca: '现教4楼机房',
        date: '2017/02/21-2017/03/04'
      },
      {
        id: '1',
        name: '次时代游戏关卡设计 ',
        company:'CGMoocs',
        content: '使用3DsMax和PS完成建模及关卡设计。',
        loca: '第一实验楼501 ',
        date: '2017/02/21-2017/03/04'
      },{
        id: '1',
        name: 'UID实训方案',
        company:'达内',
        content: '使用Photoshop等工具完成IOS7手机、Android手机图标的设计，完成平面海报、网页界面的设计。',
        loca: '杭州市下沙科技园路65号',
        date: '2017/02/21-2017/03/04'
      },{
        id: '1',
        name: '植物大战僵尸',
        company:'达内',
        content: '使用java开发一个类似于植物大战僵尸的小游戏',
        loca: '达内服务外包大楼',
        date: '2017/02/21-2017/03/04'
      },{
        id: '1',
        name: '简易工作流引擎',
        company:'杭州益赛',
        content: '该课程意在让学生了解工作流的基本概念，加深对数据库的了解，提高Java编码能力',
        loca: '小和山水木清华',
        date: '2017/02/21-2017/03/04'
      },],
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
