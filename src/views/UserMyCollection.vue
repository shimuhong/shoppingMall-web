<template>
  <!-- 我的收藏 -->
  <div class="UserMyCollection">
    <div class="formBox">
      <el-form :model="modelData" label-width="90px">
        <el-form-item label="订单编号:">
          <el-input v-model="modelData.name" placeholder="请输入订单编号"/>
        </el-form-item>
        <el-form-item label="商品编号:">
          <el-input v-model="modelData.name" placeholder="请输入商品编号"/>
        </el-form-item>
        <el-button type="primary" :icon="Search">搜索</el-button>
      </el-form>
    </div>
    <div class="listBox">
      <div v-for="item in 10" :key="item" class="prodItem" @click="prodClick">
        <!-- 收藏星号 -->
        <img :src="icon_collection_pick" alt="" class="collection">
        <!-- 商品图片 -->
        <img :src="prodImg" alt="" class="prodPic">
        <div class="prodName">
          HUAWEI MateBook D 16
        </div>
        <div class="prodCount">
          ¥ 5399
        </div>
        <div class="prodNumber">
          商品编号：3434232
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import prodImg from '@/assets/prodImg.png';
import icon_collection_pick from '@/assets/icon_collection_pick.png';

export default {
  name: 'UserMyCollection',
  components: {
  },
  setup() {

    const params = reactive({
      modelData: {}
    });

    const prodClick = () => {

    }

    return {
      ...toRefs(params),
      Search,
      prodImg,
      icon_collection_pick,
      prodClick
    };
  }
}

</script>
<style lang="scss" scoped>
$contBack: #fff;

.UserMyCollection {
  .formBox {
    background: $contBack;
    margin-bottom: 14px;
    padding-top: 20px;
    .el-form {
      display: flex;
      // margin-top: 30px;
      .el-button {
        margin-left: 20px;
      }
    }
  }
  .listBox {
    min-height: 200px;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    margin-left: -10px;
    // justify-content: space-between;
    text-align: center;
    .prodItem {
      background: $contBack;
      border-radius: 7px;
      width: 182px;
      height: 200px;
      margin-bottom: 10px;
      margin-left: 10px;
      cursor: pointer;
      position: relative;
      .collection {
        position: absolute;
        top: 12px;
        right: 11px;
        width: 15px;
      }
      .prodPic {
        height: 100px;
        margin: 25px auto 0;
        display: block;
      }
      .prodName {
        font-weight: bold;
        font-size: 12px;
      }
      .prodCount {
        font-weight: bold;
        color: #C20022;
      }
      .prodNumber {
        color: rgba(102, 102, 102, 1);
        font-size: 12px;
      }
    }
  }
}
</style>
