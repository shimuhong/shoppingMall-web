<template>
  <SDialog ref="DialogRef" class="registerDialog">
      <h3>
        注册
      </h3>
      <el-input v-model="username" placeholder="请输入5位长度以上的账号" >
        <template #prefix>
          <img :src="icon_userName" >
        </template>
      </el-input>
      <el-input
        v-model="password"
        type="password"
        placeholder="请输入6位以上的密码"
        show-password
      >
        <template #prefix>
          <img :src="icon_password" >
        </template>
      </el-input>
      <el-input v-model="qqNumber" placeholder="请输入qq号码" >
        <template #prefix>
          <img :src="icon_qq" >
        </template>
      </el-input>
    
    <div class="verificationCode_Box">
      <el-input v-model="captcha" placeholder="请输入验证码" />
      <div class="codeImgBox">
        VVVV
      </div>
    </div>

    <div class="checkedBox">
      <el-checkbox v-model="isChecked" size="large">我已同意协议</el-checkbox>
      <div class="txt">
        
      </div>
    </div>
    <div class="btnBox">
      <el-button type="primary" @click="registerAPIClick">立即注册</el-button>
    </div>
      
  </SDialog>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';
import SDialog from '@/components/Dialog.vue';
import icon_userName from '@/assets/icon_userName.png';
import icon_password from '@/assets/icon_password.png';
import icon_qq from '@/assets/icon_qq.png';
import { ElMessage } from 'element-plus'
import request from '@/utils/request/index.js';

export default {
  name: 'RegisterDialog',
  components: {
    SDialog
  },
  setup(props, { emit }) {
    const DialogRef = ref();
    const params = reactive({
      username: '',
      password: '',
      qqNumber: '',
      captcha: '',
      isChecked: false,
    });
    
    const open = () => {
      console.log('openRegister', DialogRef.value);
      DialogRef.value.open();
    }

    const registerAPIClick = () => {

      console.log('loginClick:', import.meta.env)
      ElMessage({
        message: '报错了！',
        type: 'warning',
      })
      request({
        url: '/user/register',
        data: {
          "username": params.username,
          "password": params.password,
          "qq": params.qqNumber,
          "captcha": params.captcha,
        },
      }).then(res => {
        console.log('sss:', res)
      }).catch((err) => {
        console.log('err:', err)
      });
    }


    return {
      ...toRefs(params),
      open,
      DialogRef,
      icon_userName,
      icon_password,
      icon_qq,
      registerAPIClick
    };
  }
}
</script>

<style>
.registerDialog .dialogContent h3 {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  padding-bottom: 38px;
}
.registerDialog .dialogContent .verificationCode_Box {
  display: flex;
}
.registerDialog .dialogContent .verificationCode_Box .codeImgBox {
  background: #F7F7F7;
  border-radius: 14px;
  margin-left: 6px;
  height: 52px;
  width: 160px;
}
.registerDialog .dialogContent {
  padding: 30px 55px;
}
.registerDialog .dialogContent .checkedBox {
  display: flex;
  height: 40px;
  line-height: 40px;
  justify-content: space-between;
  margin-top: -12px;

}
.registerDialog .dialogContent .checkedBox .el-checkbox--large .el-checkbox__inner {
  width: 27px;
  height: 27px;
  border-radius: 7px;
  /* background: #F4F4F4 ; */
}
.registerDialog .dialogContent .checkedBox .el-checkbox--large .el-checkbox__inner::after {
  height: 14px;
  left: 9px;
  top: 2px;
  width: 8px;
  
}
.registerDialog .dialogContent .checkedBox .txt {
  color: #BA0124;
}

.registerDialog .dialogContent .el-input{
  height: 52px;
  margin-bottom: 22px;
}
.registerDialog .dialogContent .el-input .el-input__wrapper {
  background: #F7F7F7;
  border-radius: 14px;
  padding-left: 23px;
}
.registerDialog .dialogContent .el-input .el-input__wrapper .el-input__prefix img{
  height: 25px;
}

.registerDialog .dialogContent .btnBox {
  text-align: center;
  margin-top: 26px;
}
.registerDialog .dialogContent .btnBox .el-button {
  width: 406px;
  height: 60px;
  border-radius: 14px;
}
.registerDialog .dialogContent .btnBox .el-button.el-button--primary {
  background: #BA0124;
  color: #fff;
  border: none;
}
.registerDialog .dialogContent .btnBox .el-button.default {
  border:1px solid #BA0124;
  color: #BA0124;
}
</style>
