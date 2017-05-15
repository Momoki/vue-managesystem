<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">学生信息</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>学生管理</el-breadcrumb-item>
        <el-breadcrumb-item>学生列表</el-breadcrumb-item>
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
             <el-form-item label="姓名">
               <el-input v-model="searchform.name"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="8">
             <el-form-item label="班级">
               <el-cascader
                 :options="classData"
                 v-model="searchform.oClass"
               >
               </el-cascader>
             </el-form-item>
           </el-col>
           <el-col :span="8">
             <el-form-item label="实习状态">
               <el-select v-model="searchform.status" clearable placeholder="请选择">
                 <el-option
                   label="实习中"
                   value="0">
                 </el-option>
                 <el-option
                   label="未实习"
                   value="1">
                 </el-option>
               </el-select>
             </el-form-item>
           </el-col>
           <el-col :span="8">
             <div style="color:#fff">1</div>
           </el-col>
           <el-col :span="8">
             <el-button type="primary" @click=loadData>搜索</el-button>
           </el-col>
         </el-row>
        </el-form>
      </div>
      <div class="fast-search">
        <span>快捷搜索：</span>
        <el-button type="text">全部</el-button>
        <el-button type="text">毕业班</el-button>
        <el-button type="text">非毕业班</el-button>
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
        grade: null, //年级，选填，is_graduating 为 true 时将不起作用
        major: '', //选填，四位数字组成的字符串，专业代号
        class_index: null, //选填，班级号
        name: '', //选填，学生姓名，存在时其他条件筛选将不起作用
        status: null, //实习状态
        oClass: null
      },
      tableData: [{
        num: '130708122',
        name: '王虎',
        grade: '13级',
        pro: '网络工程',
        class: '1班',
        status: '实习中',
        address: '杭州XX网络技术有限公司'
      }, {
        num: '130708124',
        name: '张菁菁',
        grade: '13级',
        pro: '网络工程',
        class: '1班',
        status: '未实习',
        address: '/'
      }, {
        num: '130708125',
        name: '黄正',
        grade: '13级',
        pro: '网络工程',
        class: '1班',
        status: '实习中',
        address: '上海XX文化传播有限公司'
      }, {
        num: '130708126',
        name: '李莉',
        grade: '13级',
        pro: '网络工程',
        class: '1班',
        status: '实习中',
        address: '浙江广播电视集团'
      }],
      classData: [{
          value: '13',
          label: '13级',
          children: [{
              value: 'shejiyuanze',
              label: '网络工程',
              children: [{
                  value: 'yiban',
                  label: '1班'
                },
                {
                  value: 'erban',
                  label: '2班'
                }
              ]
            },
            {
              value: 'daohang',
              label: '信息系统管理与设计',
              children: [{
                value: 'all',
                label: '全部'
              }]
            }
          ]
        },
        {
          value: '14',
          label: '14级'
        },
        {
          value: '15',
          label: '15级'
        },
        {
          value: '16',
          label: '16级'
        }
      ],
      value5: []
    }
  },
  methods: {
    loadData(){
      console.log(this.searchform);
      axios.get('http://139.129.37.224:8080/teacher/i/cooperation/list', {params: this.searchform
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
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
