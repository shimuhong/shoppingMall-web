<template>
  <SDialog ref="DialogRef" class="forgetDialog">
      <h3>
        忘记密码
      </h3>
      <el-input v-model="phone" placeholder="请输入注册的手机号" maxlength="11">
        <template #prefix>
          <img :src="icon_userName" >
        </template>
      </el-input>

      <div class="messageBox btnBox">
        <el-input v-model="verificationCode" placeholder="请输入验证码" />
        <el-button type="primary" @click="getSmsClick">获取验证码</el-button>
      </div>

      <el-input
        v-model="password"
        type="password"
        placeholder="请输入6位以上的密码"
        show-password
      >
        <template #prefix>
          <div class="pwdPrefix">
            密码
          </div>
        </template>
      </el-input>
      <div class="checkedBox">
        <el-checkbox v-model="isChecked" size="large">我已同意协议</el-checkbox>
        <div class="txt">
          
        </div>
      </div>
      <div class="btnBox">
        <el-button type="primary" @click="resetAPIClick">立即重置</el-button>
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
      userName: '',
      password: '',
      verificationCode: '',
      isChecked: false,
      phone: ''
    });
    
    const open = () => {
      console.log('openRegister', DialogRef.value);
      DialogRef.value.open();
    }

    const resetAPIClick = () => {

      console.log('loginClick:', import.meta.env)
      ElMessage({
        message: '报错了！',
        type: 'warning',
      })
      request({
        url: '/djstockorder-api/placeOrder/revocation',
        data: {
          placeOrderId: 111
        },
      }).then(res => {
        console.log('sss:', res)
      }).catch((err) => {
        console.log('err:', err)
      });
    }

    const getSmsClick = () => {
      if (params.phone.length !== 11) {
        ElMessage({
          message: '请输入正确的手机号',
          type: 'warning',
        })
        return
      }

      request({
        url: '/sms_send/get_sms_send',
        data: {
          phone: params.phone
        },
      }).then(res => {
        console.log('sss:', res)
        ElMessage({
          message: res.msg,
          type: 'success',
        })
      })
    }

    return {
      ...toRefs(params),
      open,
      DialogRef,
      icon_userName,
      icon_password,
      icon_qq,
      resetAPIClick,
      getSmsClick
    };
  }
}
</script>

<style>
.forgetDialog .dialogContent h3 {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  padding-bottom: 38px;
}
.forgetDialog .messageBox {
  display: flex;
}
.forgetDialog .dialogContent {
  padding: 30px 55px;
}
.forgetDialog .dialogContent .pwdPrefix {
  padding-right: 10px;
  margin-right: 15px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.forgetDialog .dialogContent .messageBox.btnBox .el-button {
  height: 52px;
  width: 160px;
  margin-left: 7px;
}

.forgetDialog .dialogContent .checkedBox {
  display: flex;
  height: 40px;
  line-height: 40px;
  justify-content: space-between;
  margin-top: -12px;
  margin-bottom: 50px;

}
.forgetDialog .dialogContent .checkedBox .el-checkbox--large .el-checkbox__inner {
  width: 27px;
  height: 27px;
  border-radius: 7px;
  /* background: #F4F4F4 ; */
}
.forgetDialog .dialogContent .checkedBox .el-checkbox--large .el-checkbox__inner::after {
  height: 14px;
  left: 9px;
  top: 2px;
  width: 8px;
  
}
.forgetDialog .dialogContent .checkedBox .txt {
  color: #BA0124;
}

.forgetDialog .dialogContent .el-input{
  height: 52px;
  margin-bottom: 22px;
}
.forgetDialog .dialogContent .el-input .el-input__wrapper {
  background: #F7F7F7;
  border-radius: 14px;
  padding-left: 23px;
}
.forgetDialog .dialogContent .el-input .el-input__wrapper .el-input__prefix img{
  height: 25px;
}

.forgetDialog .dialogContent .btnBox {
  text-align: center;
  margin-top: 26px;
}
.forgetDialog .dialogContent .btnBox .el-button {
  width: 406px;
  height: 60px;
  border-radius: 14px;
}
.forgetDialog .dialogContent .btnBox .el-button.el-button--primary {
  background: #BA0124;
  color: #fff;
  border: none;
}
.forgetDialog .dialogContent .btnBox .el-button.default {
  border:1px solid #BA0124;
  color: #BA0124;
}
</style>
