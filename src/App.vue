<template>
<div class="wrap">
    <el-row class="container">
        <el-col :span="4" class="wrap-menu">
            <xmenu :base-info="base"></xmenu>
        </el-col>
        <el-col :span="20" class="main">
            <xhead></xhead>
            <!-- <xmain></xmain> -->
            <router-view class="view"></router-view>
            <!-- <el-button @click.native="startHacking">Let's do it</el-button> -->
        </el-col>


    </el-row>
</div>
</template>
<script>
import xmenu from './components/menu.vue';
import xhead from './components/header.vue';

export default {
    components: {
        xmenu,
        xhead
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
            },
            msg: 'Use Vue 2.0 Today!'
        }
    },

    methods: {
        startHacking() {
            this.$notify({
                title: 'It Works',
                message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
                duration: 6000
            })
        }
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
</style>
