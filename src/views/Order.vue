<template>
  <div class="orderCont">
    <div class="contTop">

    </div>
    <div class="contBottom">
      <el-tabs v-model="activeName" class="orderTabs">
        <el-tab-pane label="商品详情" name="detail" />
        <el-tab-pane label="所有订单" name="order" />
      </el-tabs>
      <!-- 商品详情 -->
      <OrderDetail v-show="activeName === 'detail'" />
      <!-- 所有订单 -->
      <OrderList v-show="activeName === 'order'" />
    </div>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, reactive, toRefs } from 'vue';
import carouselImg from '@/assets/carouselImg.png';
import prodImg from '@/assets/prodImg.png';
import OrderDetail from './OrderDetail.vue';
import OrderList from './OrderList.vue';
export default {
  name: 'order',
  components: {
    OrderDetail,
    OrderList
  },
  setup() {
    const router = useRouter();
    const $route = useRoute();

    const params = reactive({
      activeName: 'detail'
    });

    const btclick = () => {
      console.log('btclick==')
      router.push('page1');
    }

    onMounted(() => {
      console.log('onMounted==', $route);


    });


    return {
      ...toRefs(params),
      btclick,
      carouselImg,
      prodImg
    };
  }
}

</script>
<style lang="scss" scoped>
.orderCont {
  background: #fff;
  padding: 20px 25px;
  :deep(.orderTabs) {
    .el-tabs__nav-wrap {
      &:after {
        height: 1px;
      }
    }
  }

}
</style>
