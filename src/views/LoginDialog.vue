<template>
  <SDialog ref="DialogRef" class="loginDialog">
      <div>
        <h3>
          登录
        </h3>
        <el-input v-model="userName" placeholder="请输入5位长度以上的账号" >
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
        <div class="checkedBox">
          <el-checkbox v-model="isChecked" size="large">我已同意协议</el-checkbox>
          <div class="txt" @click="forgetClick">
            忘记密码？
          </div>
        </div>
        <div class="btnBox">
          <el-button type="primary" @click="loginAPIClick">登录</el-button>
        </div>
        <div class="btnBox">
          <el-button class="default" @click="registerOpenClick">去注册</el-button>
        </div>
      </div>
      
      <!-- 协议 -->
      <div>

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
import storage from 'store'

export default {
  name: 'RegisterDialog',
  components: {
    SDialog
  },
  setup(props, { emit }) {
    const DialogRef = ref();
    const params = reactive({
      userName: 'zhangsan1',
      password: '123456',
      isChecked: false,
    });
    
    const open = () => {
      console.log('openRegister', DialogRef.value);
      DialogRef.value.open();
    }

    const loginAPIClick = () => {

      if (params.userName.length < 5) {
        ElMessage({
          message: '请输入5位长度以上的账号',
          type: 'warning',
        })
        return
      }
      if (params.password.length < 6) {
        ElMessage({
          message: '请输入6位以上的密码',
          type: 'warning',
        })
        return
      }
      if (!params.isChecked) {
        ElMessage({
          message: '请勾选协议！',
          type: 'warning',
        })
        return
      }
      
      request({
        url: '/user/login',
        data: {
          "account": params.userName,
          "password": params.password
        },
      }).then(res => {
        console.log('sss:', res)
        ElMessage({
          message: res.msg,
          type: 'success',
        })
        storage.set('userinfo', res.data.userinfo);
        storage.set('uid', res.data.userinfo.id);
        storage.set('token', res.data.userinfo.token);
        DialogRef.value.close();
        emit('loginSuccess', res.data.userinfo);
      }).catch((err) => {
        console.log('err:', err)
      });
    }
    
    // 忘记密码
    const forgetClick = () => {
      DialogRef.value.close();
      emit('forgetClick')
    }

    // 去注册
    const registerOpenClick = () => {
      DialogRef.value.close();
      emit('registerOpenClick')
    }

    return {
      ...toRefs(params),
      open,
      DialogRef,
      icon_userName,
      icon_password,
      icon_qq,
      loginAPIClick,
      registerOpenClick,
      forgetClick
    };
  }
}
</script>

<style>
.loginDialog .dialogContent h3 {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  padding-bottom: 38px;
}

.loginDialog .dialogContent .checkedBox {
  display: flex;
  height: 40px;
  line-height: 40px;
  justify-content: space-between;
  margin-top: -12px;
  margin-bottom: 50px;

}
.loginDialog .dialogContent {
  padding: 30px 55px;
}
.loginDialog .dialogContent .checkedBox .large {
  cursor: pointer;
}
.loginDialog .dialogContent .checkedBox .txt {
  cursor: pointer;
}
.loginDialog .dialogContent .checkedBox .el-checkbox--large .el-checkbox__inner {
  width: 27px;
  height: 27px;
  border-radius: 7px;
  /* background: #F4F4F4 ; */
}
.loginDialog .dialogContent .checkedBox .el-checkbox--large .el-checkbox__inner::after {
  height: 14px;
  left: 9px;
  top: 2px;
  width: 8px;
  
}
.loginDialog .dialogContent .checkedBox .txt {
  color: #BA0124;
}

.loginDialog .dialogContent .el-input{
  height: 52px;
  margin-bottom: 22px;
}
.loginDialog .dialogContent .el-input .el-input__wrapper {
  background: #F7F7F7;
  border-radius: 14px;
  padding-left: 23px;
}
.loginDialog .dialogContent .el-input .el-input__wrapper .el-input__prefix img{
  height: 25px;
}

.loginDialog .dialogContent .btnBox {
  text-align: center;
  margin-top: 26px;
}
.loginDialog .dialogContent .btnBox .el-button {
  width: 406px;
  height: 60px;
  border-radius: 14px;
}
.loginDialog .dialogContent .btnBox .el-button.el-button--primary {
  background: #BA0124;
  color: #fff;
  border: none;
}
.loginDialog .dialogContent .btnBox .el-button.default {
  border:1px solid #BA0124;
  color: #BA0124;
}
</style>
