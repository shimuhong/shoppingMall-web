<template>
  <div class="orderCont">
    <div class="contTop">
      <div class="contTopLeft">
        <!-- 商品购买区域 -->
        <OrderBuy />
      </div>
      <div class="contTopRight">
        <div class="userBox">
          <div class="headerBox">
            <div class="headerPic">
              <!-- <img :src="prodImg" alt=""> -->
            </div>
            <div class="headerTxt">
              <div class="nameBox">
                <div class="name">会员昵称</div>
                <div class="tag">VIP</div>
              </div>
              <div class="count">
                余额：2345
              </div>
            </div>
            
          </div>
          <div class="menus">
            <div class="menuItem">
              <img :src="menu_my" alt="">
              <div class="menuName">
                个人中心
              </div>
            </div>
            <div class="menuItem">
              <img :src="menu_order" alt="">
              <div class="menuName">
                我的订单
              </div>
            </div>
            <div class="menuItem">
              <img :src="menu_get" alt="">
              <div class="menuName">
                我的收藏
              </div>
            </div>
            <div class="menuItem">
              <img :src="menu_bag" alt="">
              <div class="menuName">
                我的钱包
              </div>
            </div>
          </div>
        </div>
        <!-- 价格变动 -->
        <div class="priceList">
          <div class="priceTitle">
            <div class="txt">
              <div class="redLeft"></div>
              <div>价格变动</div>
            </div>
            <div class="tip">仅显示最近20次变更</div>
          </div>
          <!-- 价格变动列表 -->
          <div class="priceItems">
            <div class="item">
              <div class="price down">
                <img :src="priceDown">
                <span>降价-2.02元</span>
              </div>
              <div class="date">
                2022-12-03
              </div>
            </div>
            
            <div class="item">
              <div class="price up">
                <img :src="priceUp">
                <span>上涨+2.02元</span>
              </div>
              <div class="date">
                2022-12-03
              </div>
            </div>

            <div class="item">
              <div class="price down">
                <img :src="priceDown">
                <span>降价-2.02元</span>
              </div>
              <div class="date">
                2022-12-03
              </div>
            </div>
            <div class="item">
              <div class="price down">
                <img :src="priceDown">
                <span>降价-2.02元</span>
              </div>
              <div class="date">
                2022-12-03
              </div>
            </div>
          </div>
        </div>
      </div>
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
import OrderBuy from './OrderBuy.vue';
import OrderDetail from './OrderDetail.vue';
import OrderList from './OrderList.vue';
import menu_my from '@/assets/menu_my.png';
import menu_order from '@/assets/menu_order.png';
import menu_get from '@/assets/menu_get.png';
import menu_bag from '@/assets/menu_bag.png';

import priceDown from '@/assets/priceDown.png';
import priceUp from '@/assets/priceUp.png';

export default {
  name: 'order',
  components: {
    OrderBuy,
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
      prodImg,
      menu_my,
      menu_order,
      menu_get,
      menu_bag,
      priceDown,
      priceUp
    };
  }
}

</script>
<style lang="scss" scoped>
.orderCont {
  
  .contTop {
    display: flex;
    margin-bottom: 17px;
    .contTopLeft {
      flex-wrap: wrap;
      flex-grow: 1;
      padding: 20px 25px 45px;
      background: #fff;
    }
    .contTopRight {
      width: 233px;
      flex-shrink: 0;
      margin-left: 10px;
      .userBox {
        background: #fff;
        color: #333;
        .headerBox {
          padding: 25px 17px;
          display: flex;
          .headerPic {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: #999;
            // img {
            //   width: 100%;
            // }
            
          }
          .headerTxt {
            padding-top: 10px;
            padding-left: 10px;
            div {
              height: 26px;
              line-height: 26px;
            }
            .nameBox {
              font-weight: bold;
              display: flex;
              align-items: center;
              .name {
                font-size: 14px;
                padding-right: 7px;
              }
              .tag {
                background: rgba(186, 1, 36, 1);
                color: #fff;
                width: 45px;
                height: 12px;
                line-height: 12px;
                font-size: 12px;
                border-radius: 9px;
                text-align: center;
              }
            }
            .count {
              font-weight: bold;
              color: rgba(186, 1, 36, 1);
              font-size: 12px;
              line-height: 12px;
            }
          }
        }
        .menus {
          display: flex;
          border-top: 1px solid rgba(0,0,0, 0.07);
          line-height: normal;
          justify-content: space-evenly;
          .menuItem {
            text-align: center;
            padding: 40px 0;
            cursor: pointer;
            img {
              width: 30px;
            }
            .menuName {
              padding-top: 10px;
              font-size: 12px;
            }
          }
        }
      }
      .priceList {
        background: #fff;
        margin-top: 14px;
        padding: 22px 14px;
        .priceTitle {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          .txt {
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            display: flex;
            align-items: center;
            .redLeft {
              background: rgba(186, 1, 36, 1);
              width: 4px;
              height: 18px;
              border-radius: 2px;
              margin-right: 4px;
            }
          }
          .tip {
            color: rgba(153, 153, 153, 1);
            font-size: 12px;
            display: flex;
            align-items: center;
          }
        }
        .priceItems {
          .item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            .price {
              font-size: 14px;
              display: flex;
              align-items: center;
              img {
                width: 14px;
              }
              span {
                margin-left: 2px;
              }
            }
            .price.down {
              color: rgba(90, 192, 70, 1);
            }
            .price.up {
              color: rgba(186, 1, 36, 1)
            }
            .date {
              font-size: 12px;
              color: rgba(153, 153, 153, 1);
            }
            
          }
        }
      }
    }
  }
  .contBottom {
    padding: 20px 25px;
    background: #fff;
    :deep(.orderTabs) {
      .el-tabs__nav-wrap {
        &:after {
          height: 1px;
        }
      }
    }
  }
  

}
</style>
