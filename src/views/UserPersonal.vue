<template>
  <!-- 个人中心 -->
  <div class="UserPersonal">
    <el-radio-group v-model="radioValue" size="large">
      <el-radio-button label="1">个人等级</el-radio-button>
      <el-radio-button label="2">账号设置</el-radio-button>
      <el-radio-button label="3">修改密码</el-radio-button>
    </el-radio-group>

    <!-- 个人等级 -->
    <div v-show="radioValue === '1'" class="radioCont cardBox">
      <img :src="card_vip" />
      <div class="vip">
        VIPI
      </div>
      <div class="level">
        会员等级 {{userinfo.level}} 级
      </div>
    </div>
    <!-- 账号设置 -->
    <div v-show="radioValue === '2'" class="radioCont userConfig">
      <el-form :model="modelData" label-width="85px" size="large">
        <el-form-item label="会员昵称：">
          <el-input v-model="modelData.nickname" placeholder="请输入会员昵称" />
        </el-form-item>
        <el-form-item label="电话号码：">
          <el-input v-model="modelData.mobile" placeholder="请输入电话号码" />
        </el-form-item>
        <el-form-item label="QQ号码：">
          <el-input v-model="modelData.qq" placeholder="请输入QQ号码" />
        </el-form-item>
        <el-form-item label="头像：">
          上传
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="setUserClick">保存</el-button>
    </div>
    <!-- 修改密码 -->
    <div v-show="radioValue === '3'" class="radioCont userConfig">
      <el-form :model="modelData" label-width="100px" size="large">
        <el-form-item label="原密码：">
          <el-input v-model="modelData.oldpwd" placeholder="请输入原密码" type="password" show-password/>
        </el-form-item>
        <el-form-item label="新密码：">
          <el-input v-model="modelData.newpwd" placeholder="请输入新密码"  type="password" show-password/>
        </el-form-item>
        <el-form-item label="重复新密码：">
          <el-input v-model="modelData.confirmpwd" placeholder="请输再次入新密码"  type="password" show-password/>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="updatepwdClick">修改</el-button>
    </div>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, reactive, toRefs } from 'vue';
import card_vip from '@/assets/card_vip.png';
import request from '@/utils/request/index.js';
import { ElMessage } from 'element-plus'
import storage from 'store'
export default {
  name: 'UserPersonal',
  components: {
  },
  props: {
    userinfo: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const router = useRouter();

    const params = reactive({
      modelData: {
        oldpwd: '',
        newpwd: '',
        confirmpwd: '',
        nickname: '',
        qq: '',
        mobile: '',
        avatar: '',
      },
      radioValue: '1'
    });
    // 账号设置
    const setUserClick = () => {
      request({
        url: '/new_index/set_user_index',
        data: {
          "uid": storage.get('userinfo').id, //用户id
          "nickname": params.modelData.nickname,//用户昵称
          "qq": params.modelData.qq,//用户qq
          "mobile": params.modelData.mobile,//用户手机号
          "avatar": params.modelData.avatar,//用户头像
        },
      }).then(res => {
        console.log('sss:', res)
        ElMessage({
          message: res.msg,
          type: 'success',
        })
      })
    }

    // 修改密码
    const updatepwdClick = () => {
      if (params.modelData.newpwd !== params.modelData.confirmpwd) {
        ElMessage({
          message: '新密码两次输入不一致，请重新输入！',
          type: 'warning',
        })
        return;
      }
      request({
        url: '/user/updatepwd',
        data: {
          "type":"pwd",//类型：pwd修改密码
          "uid": storage.get('userinfo').id, //用户id
          "oldpwd": params.modelData.oldpwd, //原来密码
          "newpwd": params.modelData.newpwd, //新密码
          "confirmpwd": params.modelData.confirmpwd //确认新密码
        },
      }).then(res => {
        console.log('sss:', res)
        ElMessage({
          message: res.msg,
          type: 'success',
        })
        storage.set('userinfo', {});
        router.push('/');
      })
    }

    return {
      ...toRefs(params),
      card_vip,
      updatepwdClick,
      setUserClick
    };
  }
}

</script>
<style lang="scss" scoped>
.UserPersonal {
  .radioCont {
    margin-top: 30px;
    position: relative;
  }
  .cardBox {
    .vip {
      font-size: 28px;
      font-weight: 400;
      color: #555555;
      position: absolute;
      top: 40px;
      left: 40px;
    }
    .level {
      position: absolute;
      top: 80px;
      left: 40px;
      font-size: 16px;
      font-weight: 500;
      color: #777777;
    }
  }
  .userConfig {
    .el-form {
      width: 400px;
      margin-bottom: 50px;
    }
    .el-button {
      width: 137px;
      height: 44px;
    }
  }
}
</style>
