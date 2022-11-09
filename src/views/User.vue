<template>
  <div class="userCont">
    <!-- 中部内容区域 -->
    <div class="contMiddel">
      <!-- 左侧菜单 -->
      <div class="navBarLeft">
        <div class="userTop">
          <div class="headerPic">
            <div class="tip">VIP</div>
          </div>
          <div class="name">会员昵称</div>
          <div class="number">编号：12323121</div>
          <div class="balanceTxt">余额</div>
          <div class="balance">2345.00</div>
          <div class="btnBox">
            <el-button type="primary" @click="rechargeClick">充值</el-button>
            <el-button class="getPrice" @click="withdrawalClick">提现</el-button>
          </div>
        </div>
        <el-menu
          class="el-menu-vertical-warp"
          default-active="1"
        >
          
          <el-menu-item index="1" @click="menuClick('UserPersonal', '个人中心')">
            <img :src="compName === 'UserPersonal' ? icon_UserPersonal_pick : icon_UserPersonal" />
            <div class="title">个人中心</div>
          </el-menu-item>
          <el-menu-item index="2" @click="menuClick('UserMyOrder', '我的订单')">
            <img :src="compName === 'UserMyOrder' ? icon_UserMyOrder_pick : icon_UserMyOrder" />
            <div class="title">我的订单</div>
          </el-menu-item>
          <el-menu-item index="3" @click="menuClick('UserMyCollection', '我的收藏')">
            <img :src="compName === 'UserMyCollection' ? icon_UserMyCollection_pick : icon_UserMyCollection" />
            <div class="title">我的收藏</div>
          </el-menu-item>
          <el-menu-item index="4" @click="menuClick('UserMyWallet', '我的钱包')">
            <img :src="compName === 'UserMyWallet' ? icon_UserMyWallet_pick : icon_UserMyWallet" />
            <div class="title">我的钱包</div>
          </el-menu-item>
          <el-menu-item index="5" @click="menuClick('UserCashAdmin', '提现管理')">
            <img :src="compName === 'UserCashAdmin' ? icon_UserCashAdmin_pick : icon_UserCashAdmin" />
            <div class="title">提现管理</div>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="rightCont">
        <div class="contTitle">{{menuTilte}}</div>
        <div class="contComp" :class="compName === 'UserMyCollection' ? 'backNone' : ''">
          <!-- 个人中心 -->
          <UserPersonal v-show="compName === 'UserPersonal'" />
          <!-- 我的订单 -->
          <UserMyOrder v-show="compName === 'UserMyOrder'" />
          <!-- 我的收藏 -->
          <UserMyCollection v-show="compName === 'UserMyCollection'" />
          <!-- 我的钱包 -->
          <UserMyWallet v-show="compName === 'UserMyWallet'" />
          <!-- 提现管理 -->
          <UserCashAdmin v-show="compName === 'UserCashAdmin'" />
        </div>
      </div>
    </div>
    <!-- 充值弹层 -->
    <UserRechargeDialog ref="UserRechargeDialogRef" />
    <!-- 提现弹层 -->
    <UserWithdrawalDialog ref="UserWithdrawalDialogRef" />
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, reactive, toRefs } from 'vue';
import carouselImg from '@/assets/carouselImg.png';
import prodImg from '@/assets/prodImg.png';

import icon_UserPersonal from '@/assets/icon_UserPersonal.png';
import icon_UserPersonal_pick from '@/assets/icon_UserPersonal_pick.png';
import icon_UserMyOrder from '@/assets/icon_UserMyOrder.png';
import icon_UserMyOrder_pick from '@/assets/icon_UserMyOrder_pick.png';
import icon_UserMyCollection from '@/assets/icon_UserMyCollection.png';
import icon_UserMyCollection_pick from '@/assets/icon_UserMyCollection_pick.png';
import icon_UserMyWallet from '@/assets/icon_UserMyWallet.png';
import icon_UserMyWallet_pick from '@/assets/icon_UserMyWallet_pick.png';
import icon_UserCashAdmin from '@/assets/icon_UserCashAdmin.png';
import icon_UserCashAdmin_pick from '@/assets/icon_UserCashAdmin_pick.png';

import UserPersonal from './UserPersonal.vue';
import UserMyOrder from './UserMyOrder.vue';
import UserMyCollection from './UserMyCollection.vue';
import UserMyWallet from './UserMyWallet.vue';
import UserCashAdmin from './UserCashAdmin.vue';
import UserRechargeDialog from './UserRechargeDialog.vue';
import UserWithdrawalDialog from './UserWithdrawalDialog.vue';

export default {
  name: 'user',
  components: {
    UserPersonal,
    UserMyOrder,
    UserMyCollection,
    UserMyWallet,
    UserCashAdmin,
    UserRechargeDialog,
    UserWithdrawalDialog
  },
  setup() {
    const router = useRouter();
    const $route = useRoute();
    const UserRechargeDialogRef = ref();
    const UserWithdrawalDialogRef = ref()
    const params = reactive({
      compName: 'UserPersonal',
      menuTilte: '个人中心',
    });

    // 充值
    const rechargeClick = () => {
      UserRechargeDialogRef.value.open();
    }
    // 充值
    const withdrawalClick = () => {
      UserWithdrawalDialogRef.value.open();
    }

    // 进入订货页
    const menuClick = (name, title) => {
      params.compName = name;
      params.menuTilte = title;
    }

    onMounted(() => {
      console.log('onMounted==', $route);


    });


    return {
      ...toRefs(params),
      rechargeClick,
      withdrawalClick,
      carouselImg,
      prodImg,
      icon_UserPersonal,
      icon_UserPersonal_pick,
      icon_UserMyOrder,
      icon_UserMyOrder_pick,
      icon_UserMyCollection,
      icon_UserMyCollection_pick,
      icon_UserMyWallet,
      icon_UserMyWallet_pick,
      icon_UserCashAdmin,
      icon_UserCashAdmin_pick,
      menuClick,
      UserRechargeDialogRef,
      UserWithdrawalDialogRef
    };
  }
}

</script>
<style lang="scss" scoped>
$contBack: #fff;
$contRadius: 14px;
$contMargin: 23px;
$contPadding: 14px;
.userCont {
  .carousel {
    border-radius: $contRadius;
    min-height: 150px;
    .el-carousel__container {
      height: 425px;
      .el-carousel__item {
        background: #444;
        img {
          width: 100%;
          min-height: 418px;
        }
      }
    }
    
  }
  .broadcast {
    margin-top: 14px;
    height: 51px;
    padding-left: 14px;
    line-height: 51px;
    border-radius: 7px;
    background: $contBack;
  }
  .contMiddel {
    display: flex;
    padding-top: $contMargin;
    .navBarLeft {
      flex-shrink: 0;
      width: 233px;
      background: $contBack;
      min-height: 500px;
      margin-right: 14px;
      padding-top: 44px;
      padding-bottom: 30px;
      .userTop {
        text-align: center;
        .headerPic {
          width: 67px;
          height: 67px;
          border-radius: 50%;
          background: #ccc;
          margin: 0 auto;
          position: relative;
          .tip {
            position: absolute;
            right: -10px;
            top: -9px;
            background: rgba(186, 1, 36, 1);
            color: #fff;
            width: 40px;
            height: 18px;
            line-height: 18px;
            font-size: 13px;
            border-radius: 9px;
            
          }
        }
        .name {
          color: rgba(51, 51, 51, 1);
          font-size: 22px;
          font-weight: bold;
          margin-top: 20px;
        }
        .number {
          color: rgba(153, 153, 153, 1);
          font-size: 17px;
        }
        .balanceTxt {
          color: rgba(102, 102, 102, 1);
          font-size: 17px;
          margin-top: 27px;
          font-weight: bold;
        }
        .balance {
          color: rgba(186, 1, 36, 1);
          font-size: 18px;
          font-weight: bold;
        }
        .btnBox {
          padding-top: 15px;
          padding-bottom: 50px;
          .getPrice {
            border-color: rgb(194, 0, 34);
            color: rgb(194, 0, 34);
          }
        }
      }
      .el-menu-vertical-warp {
        .el-menu-item {
          color: #333;
          height: 46px;
          display: flex;
          // justify-content: space-between;
          position: relative;
          .title {
            padding-left: 10px;
          }
          &:hover {
            background: rgba(186, 1, 36, 0.1);
          }
        }
        .el-menu-item.is-active {
          color: #fff;
          background: #BA0124;
        }
      }
    }
    .rightCont {
      min-height: 200px;
      flex-wrap: wrap;
      flex-grow: 1;
      .contTitle {
        height: 53px;
        line-height: 53px;
        background: #fff;
        color: rgba(51, 51, 51, 1);
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 14px;
        padding-left: 35px;
      }
      .contComp {
        min-height: 200px;
        background: #fff;
        padding: 20px 35px 35px;
      }
      .contComp.backNone {
        background: transparent;
        padding: 0;
      }
    }
  }
}
</style>
