<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">学生信息</h2>
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
             <el-form-item label="起止时间">
               <el-date-picker
                v-model="searchform.date"
                type="daterange"
                align="right"
                placeholder="选择日期范围"
                :picker-options="pickerOptions">
               </el-date-picker>
               </el-cascader>
             </el-form-item>
           </el-col>
           <el-col :span="8">
             <el-button type="primary" @click="loadData">搜索</el-button>
           </el-col>
         </el-row>
        </el-form>
      </div>
      <el-table :data="tableData" border tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="num" label="学号" width="120">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="grade" label="年级" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="pro" label="专业" width="120" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
         prop="class"
         label="班级"
         width="80"
         show-overflow-tooltip>
        </el-table-column>
        <el-table-column
         prop="status"
         label="实习状态"
         width="100"
         show-overflow-tooltip>
        </el-table-column>
        <el-table-column
         prop="address"
         label="实习公司"
         show-overflow-tooltip>
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
        num: '130708122',
        name: '王虎',
        grade: '13级',
        pro: '网络工程',
        class: '1班',
        status: '实习中',
        address: '杭州XX网络技术有限公司'
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
      axios.get('http://139.129.37.224:8080/teacher/i/cooperation/list', {
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
