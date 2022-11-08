<template>
  <div class="homeCont">
    <!-- 轮播 -->
    <el-carousel class="carousel">
      <el-carousel-item v-for="item in 3" :key="item">
        <img :src="carouselImg" alt="">
      </el-carousel-item>
    </el-carousel>
    <!-- 广播 -->
    <div class="broadcast">
      <img :src="icon_broadcast" alt="">
      <span>
        电视笔记本 平板笔记本 平板笔记本 平板笔记本 平板笔记本 平板笔记本 平板笔记本 平板
      </span>
      
    </div>
    <!-- 中部内容区域 -->
    <div class="contMiddel">
      <!-- 左侧菜单 -->
      <div class="navBar">
        <el-menu
          class="el-menu-vertical-warp"
          default-active="1"
        >
          <el-menu-item index="1" @click="menuClick('1')">
            <div>手机</div>
            <img class="icon_go" :src="menuChecked === '1' ? icon_menu_go_pick : icon_menu_go" />
            <div class="tipBox">
              <div class="tipCont">
                <div class="tipItem" v-for="it in 10" :key="it">
                  <div class="title">
                    HUAWEI MateBook D 16
                  </div>
                  <img :src="prodImg" alt="">
                </div>
              </div>
            </div>
          </el-menu-item>
          <el-menu-item index="2" @click="menuClick('2')">
            <div>电视</div>
            <img class="icon_go" :src="menuChecked === '2' ? icon_menu_go_pick : icon_menu_go" />
          </el-menu-item>
          <el-menu-item index="3" @click="menuClick('3')">
            <div>笔记本&nbsp;&nbsp;平板</div>
            <img class="icon_go" :src="menuChecked === '3' ? icon_menu_go_pick : icon_menu_go" />
          </el-menu-item>
          <el-menu-item index="4" @click="menuClick('4')">
            <div>穿戴</div>
            <img class="icon_go" :src="menuChecked === '4' ? icon_menu_go_pick : icon_menu_go" />
          </el-menu-item>
          <el-menu-item index="5" @click="menuClick('5')">
            <div>家电</div>
            <img class="icon_go" :src="menuChecked === '5' ? icon_menu_go_pick : icon_menu_go" />
          </el-menu-item>
          <el-menu-item index="6" @click="menuClick('6')">
            <div>智能&nbsp;&nbsp;路由器</div>
            <img class="icon_go" :src="menuChecked === '6' ? icon_menu_go_pick : icon_menu_go" />
          </el-menu-item>
          <el-menu-item index="7" @click="menuClick('7')">
            <div>生活&nbsp;&nbsp;箱包</div>
            <img class="icon_go" :src="menuChecked === '7' ? icon_menu_go_pick : icon_menu_go" />
          </el-menu-item>
        </el-menu>
      </div>
      <div class="rightCont">
        <div v-for="item in 10" :key="item" class="prodItem" @click="prodClick">
          <img :src="prodImg" alt="">
          <div class="prodName">
            HUAWEI MateBook D 16
          </div>
          <div class="prodCount">
            ¥ 5399
          </div>
        </div>
      </div>
    </div>

    <!-- 测试 -->
    <!-- <el-button @click="btclick">
      点击
    </el-button>
    <div>
      home page
    </div> -->

    <!-- 中间内容区路由切换 -->
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$router.name"/>
      </keep-alive>
    </router-view> -->
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, reactive, toRefs } from 'vue';
import carouselImg from '@/assets/carouselImg.png';
import prodImg from '@/assets/prodImg.png';
import icon_menu_go from '@/assets/icon_menu_go.png';
import icon_menu_go_pick from '@/assets/icon_menu_go_pick.png';
import icon_broadcast from '@/assets/icon_broadcast.png';
import request from '@/utils/request/index.js';

export default {
  name: 'home',
  components: {
    
  },
  setup() {
    const router = useRouter();
    const $route = useRoute();

    const params = reactive({
      menuChecked: '1',
    });

    const btclick = () => {
      console.log('btclick==')
      router.push('page1');
    }

    // 进入订货页
    const prodClick = () => {
      router.push('order');
    }

    const menuClick = (ind) => {
      params.menuChecked = ind
    }

    onMounted(() => {
      console.log('onMounted==', $route);

      // 轮播列表
      request({
        url: '/index_new/get_carousel_list',
        data: {
          "uid":"14",
        },
      }).then(res => {
        console.log('res:', res)
      })
      // 公告列表
      request({
        url: '/index_new/get_noticelist',
        data: {
          "uid":"14",
          "token":''
        },
      }).then(res => {
        console.log('res:', res)
      })

    });


    return {
      ...toRefs(params),
      btclick,
      carouselImg,
      prodImg,
      icon_menu_go,
      icon_menu_go_pick,
      menuClick,
      icon_broadcast,
      prodClick
    };
  }
}

</script>
<style lang="scss" scoped>
$contBack: #fff;
$contRadius: 14px;
$contMargin: 23px;
$contPadding: 14px;
.homeCont {
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
    img {
      width: 18px;
      position: relative;
      top: 5px;
      margin-right: 8px;
    }
  }
  .contMiddel {
    display: flex;
    padding-top: $contMargin;
    .navBar {
      flex-shrink: 0;
      width: 207px;
      background: $contBack;
      border-radius: $contRadius;
      min-height: 500px;
      // margin-right: 10px;
      padding: $contPadding 0;
      // .navItem {
      //   height: 30px;
      //   line-height: 30px;
      // }
      // .navItem.active {
      //   background: #BA0124;
      //   color: #fff;
      // }
      .el-menu {
        border: none;
      }
      .el-menu-vertical-warp {
        .el-menu-item {
          color: #333;
          height: 46px;
          display: flex;
          justify-content: space-between;
          position: relative;
          .icon_go {
            height: 13px;
          }
          .tipBox {
            // background: #000;
            width: 5px;
            position: absolute;
            right: -4px;
            top: 0;
            height: 100%;
            display: none;
            .tipCont {
              padding: 25px;
              min-width: 100px;
              position: absolute;
              left: 3px;
              top: 0;
              background: #fff;
              color: #333;
              border-radius: 14px;
              z-index: 1;
              box-shadow: 5px 0 20px -5px #ccc;
              width: max-content;
              max-width: 770px;
              .tipItem {
                float: left;
                display: flex;
                margin-right: 25px;
                cursor: pointer;
                img {
                  width: 49px;
                  height: 49px;
                }
                .title {
                  font-weight: bold;
                }
                &:hover {
                  color: #BA0124;
                }
              }
            }
          }
          &:hover {
            background: rgba(186, 1, 36, 0.1);
            .tipBox {
              display: block;
            }
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
      display: flex;
      flex-wrap: wrap;
      flex-grow: 1;
      // justify-content: space-between;
      text-align: center;
      .prodItem {
        background: $contBack;
        border-radius: $contRadius;
        width: 238px;
        height: 311px;
        margin-bottom: 10px;
        margin-left: 10px;
        cursor: pointer;
        img {
          height: 190px;
          margin: 25px auto 0;
          display: block;
        }
        .prodName {
          font-weight: bold;
        }
        .prodCount {
          font-weight: bold;
          color: #C20022;
        }
      }
    }
  }
}
</style>
