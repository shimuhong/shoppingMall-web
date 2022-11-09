<template>
  <!-- 我的订单 -->
  <div class="UserMyOrder">
    <el-radio-group v-model="radioValue" size="large">
      <el-radio-button label="1">全部订单</el-radio-button>
      <el-radio-button label="2">已付款</el-radio-button>
      <el-radio-button label="3">处理中</el-radio-button>
      <el-radio-button label="4">已完成</el-radio-button>
      <el-radio-button label="5">退单中</el-radio-button>
      <el-radio-button label="6">已退单</el-radio-button>
      <el-radio-button label="7">已退款</el-radio-button>
    </el-radio-group>
    <el-form :model="modelData" label-width="90px">
      <el-form-item label="订单编号:">
        <el-input v-model="modelData.name" placeholder="请输入订单编号"/>
      </el-form-item>
      <el-form-item label="商品编号:">
        <el-input v-model="modelData.name" placeholder="请输入商品编号"/>
      </el-form-item>
      <el-button type="primary" :icon="Search">搜索</el-button>
    </el-form>
    <el-table :data="tableData" max-height="250" class="table">
      <el-table-column prop="zip" label="商品名称" width="100" />
      <el-table-column prop="zip" label="订单状态" width="100" />
      <el-table-column prop="zip" label="商品单价" width="100" />
      <el-table-column prop="zip" label="支付金额" width="100" />
      <el-table-column prop="zip" label="下单参数" width="100" />
      <el-table-column prop="zip" label="卡密信息" width="100" />
      <el-table-column prop="zip" label="购买数量" width="100" />
      <el-table-column prop="zip" label="开始数量" width="100" />
      <el-table-column prop="zip" label="当前数量" width="100" />
      <el-table-column prop="zip" label="订单编号" width="100" />
      <el-table-column prop="zip" label="创建时间" width="100" />
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            查看状态
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
export default {
  name: 'UserMyOrder',
  components: {
  },
  setup() {

    const params = reactive({
      radioValue: '1',
      modelData: {},
      tableData: [
        { zip: '平板电脑' }
      ],
    });

    const deleteRow = () => {

    }

    return {
      ...toRefs(params),
      deleteRow,
      Search
    };
  }
}

</script>
<style lang="scss" scoped>
.UserMyOrder {
  .el-form {
    display: flex;
    margin-top: 30px;
    .el-button {
      margin-left: 20px;
    }
  }
  :deep(.table) {
    width: 883px;
    .el-table__header-wrapper {
      th {
        background: rgba(251, 234, 234, 1);
        font-weight: bold;
        color: #000;
      }
    }
    .el-table__body-wrapper {
      td {
        color: rgba(102, 102, 102, 1);
      }
    }
  }
}
</style>
