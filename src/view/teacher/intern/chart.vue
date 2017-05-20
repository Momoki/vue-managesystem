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
      <el-tabs v-model="activeName" @tab-click="loadChart">
       <el-tab-pane label="实习地区分布" name="area">
         <div id="map" style="width:800px;height:400px;margin: 0 auto"></div>
       </el-tab-pane>
       <el-tab-pane label="实习状态查看" name="status" >
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
        activeName: 'area'
      }
    },
    methods: {
      loadChart(){
        if(this.activeName == 'area'){
          this.loadMap();
        }
        else if(this.activeName == 'status'){
          this.loadPie();
        }
      },
      loadMap(){
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
            orient: 'vertical',
            left: 'left',
            data: ['iphone3']
          },
          visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
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
            name: 'iphone3',
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
            data: [{
                name: '北京',
                value: 23
              },
              {
                name: '天津',
                value: 23
              },
              {
                name: '上海',
                value: 23
              },
              {
                name: '重庆',
                value: 23
              },
              {
                name: '河北',
                value: 23
              },
              {
                name: '河南',
                value: 23
              },
              {
                name: '云南',
                value: 23
              },
              {
                name: '辽宁',
                value: 23
              },
              {
                name: '黑龙江',
                value: 23
              },
              {
                name: '湖南',
                value: 23
              },
              {
                name: '安徽',
                value: 23
              },
              {
                name: '山东',
                value: 23
              },
              {
                name: '新疆',
                value: 23
              },
              {
                name: '江苏',
                value: 23
              },
              {
                name: '浙江',
                value: 23
              },
              {
                name: '江西',
                value: 23
              },
              {
                name: '湖北',
                value: 23
              },
              {
                name: '广西',
                value: 23
              },
              {
                name: '甘肃',
                value: 23
              },
              {
                name: '山西',
                value: 23
              },
              {
                name: '内蒙古',
                value: 23
              },
              {
                name: '陕西',
                value: 23
              },
              {
                name: '吉林',
                value: 23
              },
              {
                name: '福建',
                value: 23
              },
              {
                name: '贵州',
                value: 23
              },
              {
                name: '广东',
                value: 23
              },
              {
                name: '青海',
                value: 23
              },
              {
                name: '西藏',
                value: 23
              },
              {
                name: '四川',
                value: 23
              },
              {
                name: '宁夏',
                value: 23
              },
              {
                name: '海南',
                value: 23
              },
              {
                name: '台湾',
                value: 23
              },
              {
                name: '香港',
                value: 23
              },
              {
                name: '澳门',
                value: 23
              }
            ]
          }]
        };
        let myChart = echarts.init(document.getElementById('map'));
        myChart.setOption(option);
      },
      loadPie(){
        let option = {
            title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['实习中','未实习']
            },
            series : [
                {
                    name: '全体学生',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'实习中'},
                        {value:310, name:'未实习'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        let myChart = echarts.init(document.getElementById('pie'));
        myChart.setOption(option);
      }
    },
    mounted() {
      this.loadChart();
    }
  }
</script>
