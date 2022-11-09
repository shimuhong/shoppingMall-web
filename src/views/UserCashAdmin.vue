<template>
  <!-- 提现管理 -->
  <div class="UserCashAdmin">
    <el-button type="primary">添加提现账号</el-button>
    <el-table :data="tableData" max-height="250" class="table">
      <el-table-column prop="zip" label="编号"/>
      <el-table-column prop="zip" label="提现方式"/>
      <el-table-column prop="zip" label="提现姓名"/>
      <el-table-column prop="zip" label="提现账号"/>
      <el-table-column prop="zip" label="创建时间"/>
      <el-table-column prop="zip" label="操作"/>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="editRow(scope.$index)"
          >
            编辑
          </el-button>
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'UserCashAdmin',
  components: {
  },
  setup() {

    const params = reactive({
      tableData: [],
      tableData: [
        { zip: '平板电脑' }
      ],
    });

    const editRow = () => {

    }
    const deleteRow = () => {

    }
    return {
      ...toRefs(params),
      editRow,
      deleteRow,
    };
  }
}

</script>
<style lang="scss" scoped>
.UserCashAdmin {
  .table {
    margin-top: 30px;
  }
}
</style>
