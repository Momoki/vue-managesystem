<template>
<!-- <el-row class="tac"> -->
<!-- <el-col :span="8"> -->
<!-- <h5>带 icon</h5> -->
<div class="menu">
  <div class="user-info">你好,
    <h3>{{name}}</h3>
    <el-button type="text">退出登录</el-button>
  </div>
  <el-menu v-if="role_id" class="el-menu-vertical-demo" :router="true" :unique-opened="true">
    <el-submenu index="1">
      <template slot="title">学生管理</template>
      <el-menu-item-group>
        <el-menu-item index="1-1" :route="{path: '/teacher/student/import'}">导入学生信息</el-menu-item>
        <el-menu-item index="1-2" :route="{path: '/teacher/student/list'}">学生列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">实习管理</template>
      <el-menu-item-group>
        <el-menu-item index="2-1" :route="{path: '/teacher/intern/chart'}">实习状态图表</el-menu-item>
        <el-menu-item index="2-2" :route="{path: '/teacher/intern/list'}">实习周记</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">校企合作</template>
      <el-menu-item-group>
        <el-menu-item index="3-1" :route="{path: '/teacher/cooperation/intention'}">合作意向管理</el-menu-item>
        <el-menu-item index="3-2" :route="{path: '/teacher/cooperation/enterprise'}">合作企业管理</el-menu-item>
        <el-menu-item index="3-3" :route="{path: '/teacher/cooperation/job'}">职位管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">短学期管理</template>
      <el-menu-item-group>
        <el-menu-item index="4-1" :route="{path: '/teacher/shortterm/list'}">短学期列表</el-menu-item>
        <el-menu-item index="4-2" :route="{path: '/teacher/shortterm/myterm'}">课程评分</el-menu-item>

      </el-menu-item-group>
    </el-submenu>
    <!-- <el-submenu index="5">
      <template slot="title">账户管理</template>
      <el-menu-item-group>
        <el-menu-item index="5-1" :route="{path: '/base/info'}">基本信息</el-menu-item>
        <el-menu-item index="5-2" :route="{path: '/base/pass'}">修改密码</el-menu-item>
      </el-menu-item-group>
    </el-submenu> -->
  </el-menu>
  <el-menu v-else class="el-menu-vertical-demo" :router="true" :unique-opened="true">
    <el-submenu index="1">
      <template slot="title">简历管理</template>
      <el-menu-item-group>
        <el-menu-item index="1-1" :route="{path: '/student/info/base'}">基本信息填写</el-menu-item>
        <el-menu-item index="1-2" :route="{path: '/student/info/upload'}">上传附件简历</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">实习管理</template>
      <el-menu-item-group>
        <el-menu-item index="2-1" :route="{path: '/student/intern/job'}">申请实习岗位</el-menu-item>
        <el-menu-item index="2-2" :route="{path: '/student/intern/weekly'}">实习周记</el-menu-item>
        <el-menu-item index="2-2" :route="{path: '/student/intern/report'}">提交实习报告</el-menu-item>

      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">短学期管理</template>
      <el-menu-item-group>
        <el-menu-item index="3-1" :route="{path: '/student/shortterm/list'}">选课管理</el-menu-item>
        <el-menu-item index="3-2" :route="{path: '/student/shortterm/report'}">提交短学期报告</el-menu-item>

      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</div>
</template>
<script>
import axios from 'axios';
export default {
  props: ['baseInfo'],
  data() {
    return {
      name: '俞承杭老师',
      role_id: 1,
      // home: ['/home']
    }
  },
  computed: {},
  mounted(){
    let self = this;
    axios.get(urlConfig("account")).then(function(res){
      console.log(res);
      self.name = res.data.data.items[0].number;
      self.role_id = res.data.data.items[0].role_id;
    })
  }
}
</script>
