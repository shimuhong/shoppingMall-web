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
        会员等级
      </div>
    </div>
    <!-- 账号设置 -->
    <div v-show="radioValue === '2'" class="radioCont userConfig">
      <el-form :model="modelData" label-width="85px" size="large">
        <el-form-item label="会员昵称：">
          <el-input v-model="modelData.name" placeholder="请输入会员昵称" />
        </el-form-item>
        <el-form-item label="电话号码：">
          <el-input v-model="modelData.name" placeholder="请输入电话号码" />
        </el-form-item>
        <el-form-item label="QQ号码：">
          <el-input v-model="modelData.name" placeholder="请输入QQ号码" />
        </el-form-item>
        <el-form-item label="头像：">
          上传
        </el-form-item>
      </el-form>
      <el-button type="primary">保存</el-button>
    </div>
    <!-- 修改密码 -->
    <div v-show="radioValue === '3'" class="radioCont userConfig">
      <el-form :model="modelData" label-width="100px" size="large">
        <el-form-item label="原密码：">
          <el-input v-model="modelData.name" placeholder="请输入原密码" />
        </el-form-item>
        <el-form-item label="新密码：">
          <el-input v-model="modelData.name" placeholder="请输入新密码" />
        </el-form-item>
        <el-form-item label="重复新密码：">
          <el-input v-model="modelData.name" placeholder="请输再次入新密码" />
        </el-form-item>
      </el-form>
      <el-button type="primary">修改</el-button>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';
import card_vip from '@/assets/card_vip.png';

export default {
  name: 'UserPersonal',
  components: {
  },
  setup() {

    const params = reactive({
      modelData: {},
      radioValue: '1'
    });

    return {
      ...toRefs(params),
      card_vip
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
