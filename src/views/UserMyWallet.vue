<template>
  <!-- 我的钱包 -->
  <div class="UserMyWallet">
    <el-radio-group v-model="radioValue" size="large">
      <el-radio-button label="1">资金明细</el-radio-button>
      <el-radio-button label="2">充值明细</el-radio-button>
      <el-radio-button label="3">提现明细</el-radio-button>
    </el-radio-group>
    <!-- 资金明细 -->
    <el-table v-show="radioValue === '1'" :data="tableData" style="width: 100%" max-height="250" class="table">
      <el-table-column prop="zip" label="编号"/>
      <el-table-column prop="zip" label="金额"/>
      <el-table-column prop="zip" label="交易前"/>
      <el-table-column prop="zip" label="余额"/>
      <el-table-column prop="zip" label="类型"/>
      <el-table-column prop="zip" label="订单编号"/>
      <el-table-column prop="zip" label="创建时间"/>
      <el-table-column prop="zip" label="备注" />
    </el-table>
    <!-- 充值明细 -->
    <el-table v-show="radioValue === '2'" :data="tableData" style="width: 100%" max-height="250" class="table">
      <el-table-column prop="zip" label="支付方式"/>
      <el-table-column prop="zip" label="金额"/>
      <el-table-column prop="zip" label="状态"/>
      <el-table-column prop="zip" label="订单编号"/>
      <el-table-column prop="zip" label="创建时间"/>
      <el-table-column prop="zip" label="到账时间"/>
    </el-table>
    <!-- 充值明细 -->
    <el-table v-show="radioValue === '3'" :data="tableData" style="width: 100%" max-height="250" class="table">
      <el-table-column prop="zip" label="金额"/>
      <el-table-column prop="zip" label="提现编号"/>
      <el-table-column prop="zip" label="手续费"/>
      <el-table-column prop="zip" label="提现账户"/>
      <el-table-column prop="zip" label="提现名称"/>
      <el-table-column prop="zip" label="状态"/>
    </el-table>
  </div>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'UserMyWallet',
  components: {
  },
  setup() {

    const params = reactive({
      radioValue: '1',
      tableData: [
        { zip: '平板电脑' }
      ],
    });

    return {
      ...toRefs(params),
    };
  }
}

</script>
<style lang="scss" scoped>
.UserMyWallet {
  .table {
    margin-top: 30px;
  }
}
</style>
