<template lang="html">
  <div class="">
    <div style="margin-bottom:10px;padding:20px;">
      <h2 style="margin-top:0">填写简历</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>简历管理</el-breadcrumb-item>
        <el-breadcrumb-item>填写简历</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list">
      <el-form :model="infoform" class="search">
        <el-row>
        <h5>基本信息</h5>
        <el-col :span="16">
          <el-col :span="12">
            <el-form-item label="学号">
              {{infoform.number}}
              <!-- <el-input v-model="infoform.number"></el-input> -->
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名">
              {{infoform.name}}
              <!-- <el-input v-model="infoform.name"></el-input> -->
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别">
              {{infoform.sex}}
              <!-- <el-input v-model="infoform.sex"></el-input> -->
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="政治面貌">
              <el-select v-model="infoform.poltical" clearable placeholder="请选择">
                <el-option
                  key="1"
                  label="党员"
                  value="1">
                </el-option>
                <el-option
                  key="2"
                  label="团员"
                  value="2">
                </el-option>
                <el-option
                  key="3"
                  label="群众"
                  value="3">
                </el-option>
              </el-select>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱">
              <el-input v-model="infoform.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号码">
              <el-input v-model="infoform.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-col>
        <el-col :span="8">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </el-col>
        </el-row>
        <el-row>
          <h5>在校经历</h5>
          <el-col :span="24">
            <el-form-item label="曾获奖励">
              <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入在校期间曾获得的奖励，如奖学金一等奖等"
                v-model="infoform.prize">
              </el-input>
            </el-form-item>
            <el-form-item label="实践活动">
              <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入在校期间曾参与的实践活动的经历"
                v-model="infoform.practice">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <h5>实习经历</h5>
          <el-col :span="24" v-for="(item, index) in infoform.interns" :key="item.id">
            <el-form-item label="实习时间">
              <el-date-picker
                v-model="item.date"
                type="daterange"
                placeholder="选择日期范围">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="实习内容">
              <el-input
                v-model="item.content"
                :rows="2"
                placeholder="请输入内容"
                type="textarea">
              </el-input>
              <div style="margin-left:-20px;margin-top:20px">
                <el-button @click="addIntern" icon="plus"></el-button>
                <el-button @click="removeIntern(index)" v-if="index > 0" icon="delete"></el-button>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <h5>自我鉴定</h5>
          <el-col :span="24">
            <el-form-item label="自我评价">
              <el-input
                type="textarea"
                :rows="4"
                placeholder=""
                v-model="textarea">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label=" ">
              <div style="margin-left:-20px;">
                <el-button type="primary" @click="save"><i class="el-icon-loading" v-if="ajaxing"></i> 保存</el-button>
              </div>
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
      ajaxing: false,
      infoform: {
        number: 130706222,
        name: '王琪',
        sex: '女',
        poltical: '团员',
        phone: '13777778888',
        email: 'example@a.com',
        interns: [{
          date:[]
        }]
      },
      date:'',
      imageUrl: '',
      textarea: ''
    }
  },
  methods: {
    // loadData() {}
    handleAvatarSuccess(res, file) {
       this.imageUrl = URL.createObjectURL(file.raw);
     },
     beforeAvatarUpload(file) {
       const isJPG = file.type === 'image/jpeg';
       const isLt2M = file.size / 1024 / 1024 < 2;

       if (!isJPG) {
         this.$message.error('上传头像图片只能是 JPG 格式!');
       }
       if (!isLt2M) {
         this.$message.error('上传头像图片大小不能超过 2MB!');
       }
       return isJPG && isLt2M;
     },
     addIntern(){
       this.infoform.interns.push({})
     },
     removeIntern(index){
       this.infoform.interns.splice(index,1)
     },
     save(){
       let self = this;
       self.ajaxing = true;
       setTimeout(function(){
          self.$message({
            message: '保存成功',
            type: 'success'
          });
          self.ajaxing = false;
       },1000);
     }
  }
}
</script>
