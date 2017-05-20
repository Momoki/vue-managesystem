<template>
<div class="wrap">
  <el-row class="container">
    <el-col :span="4" class="wrap-menu">
      <imenu :base-info="base"></imenu>
    </el-col>
    <el-col :span="20" class="main">
      <ihead></ihead>
      <router-view class="view"></router-view>
    </el-col>
  </el-row>
</div>
</template>
<script>
import imenu from './components/menu.vue';
import ihead from './components/header.vue';

export default {
  components: {
    imenu,
    ihead
  },
  data() {
    return {
      base: {
        menu: [{
          children: [{

          }],
          icon: '',
          id: 1,
          name: '用户管理',
          url: ''
        }]
      }
    }
  },

  methods: {}
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
