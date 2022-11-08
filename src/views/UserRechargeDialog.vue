<template>
  <SDialog ref="DialogRef" class="UserRechargeDialog" :hasHeader="true" title="充值" width="486px">
    <el-form :model="modelData" label-width="85px" size="large" style="padding: 0 10px">
      <el-form-item label="金额：">
        <el-input v-model="modelData.name" placeholder="请输入充值金额" />
      </el-form-item>
      <el-form-item label="支付类型：" class="payTypeItem">
        <div class="payType">
          人工支付
        </div>
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
  name: 'UserRechargeDialog',
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
.el-dialog.dialog.UserRechargeDialog {
      border-radius: 14px;
}
.el-dialog.dialog.UserRechargeDialog h4 {
  color: rgba(186, 1, 36, 1);
  font-size: 20px;
  font-weight: bold;
}
</style>
<style lang="scss" scoped>
.UserRechargeDialog {
  .payType {
    width: 99px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #BA0124;
    opacity: 1;
    border-radius: 8px;
    color: #fff;
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