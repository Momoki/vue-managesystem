<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">实习状态图表</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>实习管理</el-breadcrumb-item>
        <el-breadcrumb-item>实习状态图表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list">
      <el-tabs v-model="activeName" @tab-click="loadChart">
       <el-tab-pane label="实习地区分布" name="area">
         <div id="map" style="width:800px;height:400px;margin: 0 auto"></div>
         <div class="pop" v-if="showpop">
           <div class="close" @click="close">
             x
           </div>
           <h4>{{table.title}}地区的近期周报</h4>
           <el-table :data="table.data" border tooltip-effect="dark" style="width: 100%">
             <el-table-column prop="student.number" label="学号" width="120">
             </el-table-column>
             <el-table-column prop="student.name" label="姓名" width="120">
             </el-table-column>
             <el-table-column prop="province" label="省份" width="80" show-overflow-tooltip>
             </el-table-column>
             <el-table-column prop="content" label="内容" show-overflow-tooltip>
             </el-table-column>
             <el-table-column prop="create_time" label="时间" show-overflow-tooltip>
             </el-table-column>
           </el-table>
         </div>
       </el-tab-pane>
       <el-tab-pane label="实习状态分布" name="status" >
         <div id="pie" style="width:800px;height:400px;margin: 0 auto"></div>
       </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
var echarts = require('echarts/lib/echarts');
// 引入饼图
require('echarts/lib/chart/pie');
// 引入地图
require('echarts/lib/chart/map');
//引入中国地图json
require('echarts/map/js/china');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

export default {
  data() {
    return {
      showpop: false,
      activeName: 'area',
      statuslist: [],
      location: [],
      table: {}
    }
  },
  methods: {
    loadChart() {
      if (this.activeName == 'area') {
        this.loadMap();
      } else if (this.activeName == 'status') {
        this.loadPie();
      }
    },
    loadMap() {
      let self = this;
      let myDate = new Date();
      let option = {
        title: {
          text: '实习学生地区分布',
          subtext: myDate.toLocaleDateString(),
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false,
        },
        visualMap: {
          min: 0,
          max: 500,
          left: 'left',
          top: 'bottom',
          text: ['多', '少'],
          calculable: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: '90%',
          top: 'center',
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          name: '实习位置',
          type: 'map',
          mapType: 'china',
          roam: false,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data: [ {name: '湖南',value: 23 },
                {name: '安徽',value: 12 },
                {name: '山东',value: 14 },
                {name: '江苏',value: 44 },
                {name: '浙江',value: 1255 },
                {name: '江西',value: 24 }
              ]
        }]
      }
      let myChart = echarts.init(document.getElementById('map'));
      myChart.setOption(option);
      myChart.on('click', function (params) {
        // 控制台打印数据的名称
        console.log(params.name);
        axios.get(urlConfig("recentweekly"),{params: {province: params.name}})
        .then(function (res){
          console.log(res);
          self.showpop = true
          self.table.title = params.name;
          self.table.data = res.data.data ? res.data.data.items: [];
        })
      });
    },
    loadPie() {
      let self = this;
      let option = {
        title: {
          text: '学生实习状态分布',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['实习中', '实习完成','实习完成并已评分','尚未实习']
        },
        series: [{
          name: '全体学生',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          // data: self.statuslist,
          data: [{
            name: '实习中',
            value: 2452
          },{
            name: '实习完成',
            value: 245
          }],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
      let myChart = echarts.init(document.getElementById('pie'));
      myChart.setOption(option);
    },
    close(){
      this.showpop = false;
    }
  },
  mounted() {
    let self = this
    // axios.get( urlConfig("location")).then(function (res) {
    //     console.log(res);
    //     self.location = res.data.data.items;
    // });
    // statuslist
    // axios.get( urlConfig("statuslist"))
    // .then(function (res) {
    //   console.log(res);
    //   let statusname ={
    //     render: function(id) {
    //       switch (id) {
    //         case 0:
    //           return '尚未实习'
    //         case 1:
    //           return '实习中'
    //         case 2:
    //           return '实习完成'
    //         case 3:
    //           return '实习完成并已评分'
    //       }
    //     }
    //   }
    //   let status = res.data.data.items
    //   for(let i = 0; i < status.length;i++){
    //     self.statuslist.push({
    //       value: status[i].total,
    //       name: statusname.render(status[i].status)
    //     })
      // }
      self.loadChart();
    // })
    // .catch(function (error) {
    // })
  }
}
</script>
