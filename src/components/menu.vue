<template>
  <!-- <el-row class="tac"> -->
    <!-- <el-col :span="8"> -->
      <!-- <h5>带 icon</h5> -->
      <div class="menu">
        <div class="user-info">
          你好,
          <h3>喻文老师</h3>
          <el-button type="text">退出登录</el-button>
        </div>

        <el-menu default-active="1-1" class="el-menu-vertical-demo" :router="true">
          <el-submenu index="1">
            <template slot="title">学生管理</template>
            <el-menu-item-group>
              <!-- <template slot="title">学生管理</template> -->
            <el-menu-item index="1-1" :route="{path: '/home'}">导入学生信息</el-menu-item>
              <el-menu-item index="1-2" :route="{path: '/teacher'}">学生列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">实习管理</template>
            <el-menu-item-group>
              <template slot="title">学生管理</template>
            <el-menu-item index="2-1" :route="{path: '/home'}">导入学生信息</el-menu-item>
              <el-menu-item index="2-2" :route="{path: '/teacher'}">学生列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">校企合作</template>
            <el-menu-item-group>
              <template slot="title">学生管理</template>
            <el-menu-item index="3-1" :route="{path: '/home'}">导入学生信息</el-menu-item>
              <el-menu-item index="3-2" :route="{path: '/teacher'}">学生列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">短学期管理</template>
            <el-menu-item-group>
              <template slot="title">学生管理</template>
            <el-menu-item index="4-1" :route="{path: '/home'}">导入学生信息</el-menu-item>
              <el-menu-item index="4-2" :route="{path: '/teacher'}">学生列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

      </div>

      <!-- {{baseInfo}} -->
    <!-- </el-col> -->

  <!-- </el-row> -->
</template>
<style media="screen">
</style>
<script>
export default {
  props: ['baseInfo'],
  data(){
    return {
      // home: ['/home']

    }
  },
  computed:{}
}
</script>
