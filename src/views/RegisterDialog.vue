<template>
  <SDialog ref="DialogRef" class="registerDialog" :class="articleShow ? 'article' : ''">
    <div v-show="articleShow" class="articleContent">
      <div v-html="articleContent"></div>
      <div class="buttonBox">
        <el-button type="primary" @click="articleShow = false">我已阅读，返回注册页</el-button>
      </div>
      
    </div>
    <div  v-show="!articleShow">
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
      <el-input v-model="qq" placeholder="请输入qq号码" >
        <template #prefix>
          <img :src="icon_qq" >
        </template>
      </el-input>
    
      <div class="verificationCode_Box">
        <el-input v-model="captcha" placeholder="请输入验证码" />
        <div class="codeImgBox">
          <img :src="captchaBase64" @click="captchaClick">
        </div>
      </div>

      <div class="checkedBox">
        <div  class="checkedForm">
          <el-checkbox v-model="isChecked" size="large"></el-checkbox>
          <span @click="articleShow = true">我已同意协议</span>
        </div>
        <div class="txt">
          
        </div>
      </div>
      <div class="btnBox">
        <el-button type="primary" @click="registerAPIClick">立即注册</el-button>
      </div>
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
      qq: '',
      captcha: '',
      captchaBase64: '',
      isChecked: false,
      articleShow: false,
      articleContent: ''
    });
    
    const open = () => {
      console.log('openRegister', DialogRef.value);
      DialogRef.value.open();
      captchaClick()
      
      request({
        url: '/index_new/get_article_one',
        data: {
          "id":"14", //注册的时候协议
        },
      }).then(res => {
        console.log('get_article_one:', res)
        params.articleContent = res.data.content
      })
    }

    const registerAPIClick = () => {

      console.log('loginClick:', import.meta.env)
      if (params.username.length < 5) {
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
      if (params.captcha.length < 4) {
        ElMessage({
          message: '请输入正确的验证码',
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
        url: '/user/register',
        data: {
          "username": params.username,
          "password": params.password,
          "qq": params.qq,
          "captcha": params.captcha,
        },
      }).then(res => {
        console.log('sss:', res)
        ElMessage({
          message: res.msg,
          type: 'success',
        })
        DialogRef.value.close();
      }).catch((err) => {
        console.log('err:', err)
      });
    }
    // 点击验证码切换
    const captchaClick = () => {
      // 获取图片验证码
      request({
        url: '/captcha',
        method: 'GET',
        responseType: 'blob',
        data: {},
      }).catch((res) => {
        let reader = new FileReader()
        // 传入需要被转换的文本流, 例如element-ui里的el-upload选择完返回的 file.raw
        reader.readAsDataURL(res)
        // onload是异步的,封装的话可以用promise
        reader.onload = () => {
          // 输出base64
          params.captchaBase64 = reader.result
        }
      })
    }

    return {
      ...toRefs(params),
      open,
      DialogRef,
      icon_userName,
      icon_password,
      icon_qq,
      registerAPIClick,
      captchaClick
    };
  }
}
</script>

<style>

.registerDialog .dialogContent .articleContent .buttonBox {
  text-align: center;
  margin-top: 30px;
}

.registerDialog.article .dialogContent {
  padding: 0;
}
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
  overflow: hidden;
  flex-shrink: 0;
}
.registerDialog .dialogContent .verificationCode_Box .codeImgBox img {
  width: 100%;
  cursor: pointer;
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
.registerDialog .dialogContent .checkedForm {
  display: flex;
}
.registerDialog .dialogContent .checkedForm >span {
  padding-left: 10px;
  cursor: pointer;
}
.registerDialog .dialogContent .checkedForm >span:hover {
  text-decoration: underline;
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
