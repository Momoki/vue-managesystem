<template>
  <!-- <el-row class="tac"> -->
    <!-- <el-col :span="8"> -->
      <!-- <h5>带 icon</h5> -->
      <div class="menu">
        <h2>xx,你好</h2>
        <el-menu default-active="1-1" class="el-menu-vertical-demo" :router="true">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">教师管理</template>
            <el-menu-item index="1-1" :route="{path: '/home'}">选项1</el-menu-item>
              <el-menu-item index="1-2" :route="{path: '/teacher'}">列表页</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
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
