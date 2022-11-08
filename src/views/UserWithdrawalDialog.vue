<template>
  <SDialog ref="DialogRef" class="UserWithdrawalDialog" :hasHeader="true" title="充值" width="486px">
    <el-form :model="modelData" label-width="85px" size="large" style="padding: 0 10px">
      <el-form-item label="提现账号：">
        <el-select v-model="modelData.region" placeholder="请选择提现账号">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="提现金额：">
        <el-input v-model="modelData.name" placeholder="请输入提现金额" />
      </el-form-item>
    </el-form>
    <div class="buttonBox">
      <el-button>取消</el-button>
      <el-button type="primary">确定</el-button>
    </div>
  </SDialog>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';
import SDialog from '@/components/Dialog.vue';
import { ElMessage } from 'element-plus'
import request from '@/utils/request/index.js';
export default {
  name: 'UserWithdrawalDialog',
  components: {
    SDialog
  },
  setup(props, { emit }) {
    const DialogRef = ref();
    const params = reactive({
      modelData: {},
    });
    
    const open = () => {
      console.log('openRegister', DialogRef.value);
      DialogRef.value.open();
    }

    const loginAPIClick = () => {
      
      request({
        url: '/user/login',
        data: {
          "account": params.userName,
          "password": params.password
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
      loginAPIClick,
    };
  }
}
</script>

<style>
.el-dialog.dialog.UserWithdrawalDialog {
      border-radius: 14px;
}
.el-dialog.dialog.UserWithdrawalDialog h4 {
  color: rgba(186, 1, 36, 1);
  font-size: 20px;
  font-weight: bold;
}
</style>
<style lang="scss" scoped>
.UserWithdrawalDialog {
  .el-select {
    width: 100%;
  }
  .buttonBox {
    text-align: center;
    margin: 40px 0;
    .el-button {
      width: 192px;
      height: 48px;
      border-radius: 24px;
    }
  }
  
}
</style>