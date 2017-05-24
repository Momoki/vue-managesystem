<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">短学期列表</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>短学期管理</el-breadcrumb-item>
        <el-breadcrumb-item>短学期列表</el-breadcrumb-item>
        <el-breadcrumb-item>添加短学期</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list search">
      <el-form>
        <el-row>
         <el-col :span="24">
           <h5>课程信息</h5>

        <el-form-item label="课程名称">
          <el-input v-model="infoform.name"
          placeholder="输入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="课程时间">
          <el-date-picker
            v-model="infoform.date"
            type="daterange"
            placeholder="选择课程时间范围">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="上课地点">
          <el-input v-model="infoform.name"
          placeholder="输入上课地点"></el-input>
        </el-form-item>
        <el-form-item label="限选年级">
          <el-select
           :multiple="true"
           v-model="infoform.grade"
           @click="majorList"
           clearable
           placeholder="请选择年级">
            <el-option
              key="12"
              label="12级"
              value="12">
            </el-option>
            <el-option
              key="13"
              label="13级"
              value="13">
            </el-option>
            <el-option
              key="14"
              label="14级"
              value="14">
            </el-option>
            <el-option
              key="15"
              label="15级"
              value="15">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="限选专业">
          <el-select
           :multiple="true"
           v-model="infoform.major"
           @click="majorList"
           clearable
           placeholder="请选择专业">
            <el-option
              key="0708"
              label="网络工程"
              value="0708">
            </el-option>
            <el-option
              key="0806"
              label="信息管理与信息系统"
              value="0806">
            </el-option>
            <el-option
              key="0207"
              label="数字媒体技术"
              value="0207">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="课程内容">
          <el-input
            v-model="infoform.content"
            :rows="3"
            placeholder="请简要描述课程内容"
            type="textarea">
          </el-input>
        </el-form-item>
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
      infoform: {
        name: '', //学号
        content: '',
        grade: [],
        major: [],
        date: []
      },
      tableData: [{
        id: '12987122',
        name: '信息安全课',
        company: '安恒网络',
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
        disabledDate(time) {
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
