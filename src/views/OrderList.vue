<template>
  <div class="orderList">
    <el-form :model="modelData" label-width="90px">
      <el-form-item label="订单编号:">
        <el-input v-model="modelData.name" placeholder="请输入订单编号"/>
      </el-form-item>
      <el-form-item label="商品编号:">
        <el-input v-model="modelData.name" placeholder="请输入商品编号"/>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" max-height="250" class="table">
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
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'orderList',
  components: {
    
  },
  setup() {
    const router = useRouter();
    const $route = useRoute();

    const params = reactive({
      modelData: {},
      tableData: [
        { zip: '平板电脑' }
      ],
    });

    const deleteRow = () => {

    }

    return {
      ...toRefs(params),
      deleteRow
    };
  }
}

</script>
<style lang="scss" scoped>
.orderList {
  .el-form {
    display: flex;
  }
  :deep(.table) {
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
