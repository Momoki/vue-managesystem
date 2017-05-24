<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">学生列表</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>学生管理</el-breadcrumb-item>
        <el-breadcrumb-item>学生列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list">
      <div class="search">
        <el-form :model="searchform" ref="searchform">
         <el-row>
           <el-col :span="8">
             <el-form-item label="年级">
               <el-select v-model="searchform.grade" @click="majorList" clearable placeholder="请选择年级">
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
           </el-col>
           <el-col :span="8">
             <el-form-item label="专业">
               <el-select v-model="searchform.major" clearable placeholder="请选择专业">
                 <el-option
                   v-for="item in majorList"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
               </el-select>
             </el-form-item>
           </el-col>
           <el-col :span="8">
             <el-form-item label="班级">
               <el-select v-model="searchform.oClass" clearable placeholder="请选择班级">
                 <el-option
                   v-for="item in classList"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
               </el-select>
             </el-form-item>
           </el-col>
           <el-col :span="8">
             <el-form-item label="实习状态">
               <el-select v-model="searchform.status" clearable placeholder="请选择">
                 <el-option
                   label="尚未实习"
                   value="0">
                 </el-option>
                 <el-option
                   label="实习中"
                   value="1">
                 </el-option>
                 <el-option
                   label="实习完成"
                   value="2">
                 </el-option>
                 <el-option
                   label="实习完成并已评分"
                   value="3">
                 </el-option>
               </el-select>
             </el-form-item>
           </el-col>
           <el-col :span="8">
             <el-form-item label="姓名">
               <el-input v-model="searchform.name"></el-input>
             </el-form-item>
           </el-col>
           <!-- <el-col :span="8">
             <div style="color:#fff">&nbsp;</div>
           </el-col> -->
           <el-col :span="8">
             <el-button type="primary" @click="loadSearch">搜索</el-button>
           </el-col>
         </el-row>
        </el-form>
      </div>
      <div class="fast-search">
        <span>快捷搜索：</span>
        <el-button type="text" @click="loadAll">全部</el-button>
        <el-button type="text" @click="loadGra">毕业班</el-button>
      </div>

      <el-table :data="tableData" border tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="number" label="学号" width="120">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="grade" label="年级" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="major" label="专业" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="class_index" label="班级" width="80" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="status" label="实习状态" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <el-pagination
       @current-change="handleCurrentChange"
       :current-page.sync="page_index"
       :page-size="10"
       layout="prev, pager, next"
       :page-count="total_pages">
      </el-pagination>

   </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      page_index: 1,
      total_pages: 1,
      searchform: {
        number: '', //学号
        grade: null, //年级，选填，is_graduating 为 true 时将不起作用
        major: '', //选填，四位数字组成的字符串，专业代号
        class_index: null, //选填，班级号
        name: '', //选填，学生姓名，存在时其他条件筛选将不起作用
        status: null, //实习状态
        oClass: null,
      },
      form: {},
      tableData: [{
        number: 120708122,
        name: '李月',
        grade: '12级',
        major:'网络工程',
        class_index:'1班',
        status:'实习完成',
      },{
        number: 130706222,
        name: '王琪',
        grade: '13级',
        major:'网络工程',
        class_index:'1班',
        status:'实习中',
      }],
      majorList: [],
      classList: [],
    }
  },
  computed: {

  },
  methods: {
    loadAll(){
      var self = this;
      self.$refs['searchform'].resetFields();
      self.form = {}
      self.page_index = 1;
      self.loadData();
    },
    loadGra(){
      var self = this;
      self.$refs['searchform'].resetFields();
      self.form ={
        is_graduating: true
      }
      self.page_index = 1;
      self.loadData()
    },
    loadSearch(){
      var self = this;
      self.form = self.searchform;
      self.page_index = 1;
      self.tableData = [{
        number: 120708122,
        name: '李月',
        grade: '12级',
        major:'网络工程',
        class_index:'1班',
        status:'实习完成',
      }]
      // self.loadData()
    },
    loadData(){
      var self = this;
      let searchform = self.form;
      searchform.page_index = self.page_index
      searchform.total_pages = self.total_pages
      axios.get( urlConfig("studentlist"),{ params: searchform})
      .then(function (res) {
        self.total_pages = res.data.data.total_pages;
        self.tableData = res.data.data.items;
        self.tableformat();
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    handleCurrentChange(val) {
      var self = this;
      self.page_index = val
      self.loadData();
    },
    tableformat(){
      var self = this;
      let tableData = self.tableData
      console.log(tableData);
      for(let i=0;i<tableData.length;i++){
        tableData[i].grade += '级';
        let majorName = {
          render:function(key){
            for(let i= 0; i < self.majorList.length; i++)
              if(self.majorList[i].key == key){
                return self.majorList[i].value
              }
          }
        }
        tableData[i].major = majorName.render(tableData[i].major);
        tableData[i].class_index += "班";
        switch (tableData[i].status) {
          case 0:
          tableData[i].status = '尚未实习'
          break;
          case 1:
          tableData[i].status = '实习中'
          break;
          case 2:
          tableData[i].status = '实习完成'
          break;
          case 3:
          tableData[i].status = '实习完成并已评分'
          break;
        }
      }
    }
  },
  mounted(){
    let self = this;
    axios.get(urlConfig('majorlist'),{params: {institute: 11}})
    .then(function (res) {
      let majorList = [];
      let temp = res.data.data.items;
      for(let i = 0;i < temp.length; i++){
        majorList.push({
          value: temp[i].key,
          label: temp[i].value
        })
      }
      self.majorList = majorList
    })
    .catch(function (error) {
      console.log(error);
    });
    axios.get(urlConfig('classlist'),{params: {institute: 11}})
    .then(function (res){
      let temp = res.data.items;
      for(let i = 0;i < temp.length; i++){
        self.classList.push({
          value: {
            "grade": temp[i].grade,
            "major": temp[i].major,
            "class_index": temp[i].class_index
          },
          label: temp[i].classname
        })
      }
    })
  }
}
</script>
