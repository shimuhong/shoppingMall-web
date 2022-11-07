<template>
  <div class="orderBuyCont">
    <div class="orderPictures">
      <div class="picBorder">
        <img :src="pic1" alt="">
      </div>
      <div class="picPg">
        <img :src="icon_left" alt="">
        <div class="miniPics">
          <div class="picItem checked">
            <img :src="pic1" alt="">
          </div>
          <div class="picItem">
            <img :src="pic1" alt="">
          </div>
          <div class="picItem">
            <img :src="pic1" alt="">
          </div>
          <div class="picItem">
            <img :src="pic1" alt="">
          </div>
        </div>
        <img :src="icon_right" alt="">
      </div>
    </div>
    <div class="orderFormBox">
      <h3>
        HUAWEI MateBook D 16（耀金黑）
      </h3>
      <div class="orderMsg">
        <div class="itemMsg">
          <div class="label">
            价格
          </div>
          <div class="price">
            ¥5399
          </div>
        </div>
        <div class="itemMsg">
          <div class="label">
            商品库存
          </div>
          <div class="value">
            无限制
          </div>
        </div>
        <div class="itemMsg">
          <div class="label">
            商品ID
          </div>
          <div class="value">
            3345
          </div>
        </div>
        <div class="itemMsg">
          <div class="label">
            最小下单数
          </div>
          <div class="value">
            1
          </div>
        </div>
        <div class="itemMsg">
          <div class="label">
            最大下单数
          </div>
          <div class="value">
            100
          </div>
        </div>
        <div class="itemMsg">
          <div class="label">
            商品编号
          </div>
          <div class="value">
            334553345533455
          </div>
        </div>
        <div class="itemMsg">
          <div class="label">
            点击收藏
          </div>
          <div class="value">
            <img :src="icon_collection" alt="">
          </div>
        </div>
      </div>
      <div class="orderBuyForm">
        <el-button class="orderButton orderButtonChecked">单独下单</el-button>
        <el-button class="orderButton">批量下单</el-button>
        <el-form :model="formData" label-width="80px" class="orderForm">
          <el-form-item label="选择颜色">
            <el-select v-model="formData.region" placeholder="请选择颜色">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="选择内存">
            <el-select v-model="formData.region" placeholder="请选择内存">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="选择数量">
            <el-input-number v-model="formData.num" :min="1" :max="1000" />
          </el-form-item>
        </el-form>
      </div>
      <div class="orderMsg">
        <div class="productTotal">
          <div class="pLeft">
            HUAWEI MateBook D 16（耀金黑） 颜色 内存256G
          </div>
          <div class="pRight">
            ￥5143.00
          </div>

        </div>
        <div class="itemMsg">
          <div class="price">
            合计：¥5399
          </div>
        </div>
      </div>
      <el-button type="primary" class="orderSubmit">立即购买</el-button>
    </div>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, reactive, toRefs } from 'vue';

import priceUp from '@/assets/priceUp.png';
import icon_left from '@/assets/icon_left.png';
import icon_right from '@/assets/icon_right.png';
import icon_collection from '@/assets/icon_collection.png';
import pic1 from '@/assets/pic1.jpeg';
export default {
  name: 'orderBuy',
  components: {
  },
  setup() {
    const router = useRouter();
    const $route = useRoute();

    const params = reactive({
      formData: {
        num: 1,
      },
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
      priceUp,
      icon_left,
      icon_right,
      icon_collection,
      pic1
    };
  }
}

</script>
<style lang="scss" scoped>
.orderBuyCont {
  display: flex;
  .orderPictures {
    width: 280px;
    margin-right: 66px;
    flex-shrink: 0;
    .picBorder {
      width: 280px;
      height: 280px;
      border: 1px solid rgba(112, 112, 112, 1);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .picPg {
      display: flex;
      align-items: center;
      margin-top: 16px;
      .miniPics {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-grow: 1;
        .picItem {
          width: 42px;
          height: 42px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .picItem.checked {
          border: 1px solid rgba(186, 1, 36, 1);
        }
      }
      img {
        width: 23px;
        height: 23px;
        cursor: pointer;
      }
    }
  }
  .orderFormBox {
    flex-wrap: wrap;
    flex-grow: 1;
    h3 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 28px;
    }
    .orderMsg  {
      background: rgba(242, 242, 242, 1);
      padding: 20px;
      .productTotal {
        color: rgba(102, 102, 102, 1);
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
        .pLeft {
          display: flex;
        }
      }
      .itemMsg {
        display: flex;
        align-items: center;
        min-height: 30px;
        line-height: 30px;
        .label {
          width: 74px;
          font-size: 14px;
          color: rgba(129, 129, 129, 1);
          font-weight: bold;
          // 文字两端对齐
          text-align:justify;
          text-justify:distribute-all-lines;
          text-align-last:justify;
          margin-right: 14px;
        }
        .price {
          font-size: 24px;
          color: rgba(194, 0, 34, 1);
        }
        .value {
          font-size: 14px;
          font-weight: bold;
          img {
            width: 15px;
            cursor: pointer;
          }
        }
      }
    }
    .orderSubmit {
      width: 240px;
      height: 56px;
      font-size: 20px;
      margin-top: 30px;
    }
  }
  .orderBuyForm {
    margin-top: 15px;
    padding-top: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    .orderButton {
      width: 170px;
      height: 56px;
      font-size: 20px;
      font-weight: bold;
    }
    .orderButtonChecked {
      border-color: rgba(194, 0, 34, 1);
      color: rgba(194, 0, 34, 1);
    }
    .orderForm {
      margin-top: 20px;
    }
        
  }
}
</style>
