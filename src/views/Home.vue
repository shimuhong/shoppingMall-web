<template>
  <div class="content">
    <!-- 轮播 -->
    <el-carousel class="carousel">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 广播 -->
    <div class="broadcast">
      电视笔记本 平板笔记本 平板笔记本 平板笔记本 平板笔记本 平板笔记本 平板笔记本 平板
    </div>
    <!-- 中部内容区域 -->
    <div class="contMiddel">
      <!-- 左侧菜单 -->
      <div class="navBar">
        <el-menu
          class="el-menu-vertical-warp"
          default-active="1"
        >
          <el-menu-item index="1">
            <div>手机</div>
            <div>></div>
          </el-menu-item>
          <el-menu-item index="2">
            <div>电视</div>
            <div>></div>
          </el-menu-item>
          <el-menu-item index="3">
            <div>笔记本&nbsp;&nbsp;平板</div>
            <div>></div>
          </el-menu-item>
          <el-menu-item index="4">
            <div>穿戴</div>
            <div>></div>
          </el-menu-item>
          <el-menu-item index="5">
            <div>家电</div>
            <div>></div>
          </el-menu-item>
          <el-menu-item index="6">
            <div>智能&nbsp;&nbsp;路由器</div>
            <div>></div>
          </el-menu-item>
          <el-menu-item index="7">
            <div>生活&nbsp;&nbsp;箱包</div>
            <div>></div>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="rightCont">
        right
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
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$router.name"/>
      </keep-alive>
    </router-view>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, reactive, toRefs } from 'vue';
export default {
  name: 'home',
  components: {
  },
  setup() {
    const router = useRouter();
    const $route = useRoute();

    const params = reactive({
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
      btclick
    };
  }
}

</script>
<style lang="scss" scoped>
$contBack: #fff;
$contRadius: 14px;
$contMargin: 23px;
$contPadding: 14px;
.content {
  padding-top: 15px;
  width: 1200px;
  margin: 0 auto;

  .carousel {
    border-radius: $contRadius;
    height: 150px;
    .el-carousel__item {
      background: #444;
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
    .navBar {
      width: 207px;
      background: $contBack;
      border-radius: $contRadius;
      min-height: 200px;
      margin-right: $contMargin;
      padding: $contPadding 0;
      // .navItem {
      //   height: 30px;
      //   line-height: 30px;
      // }
      // .navItem.active {
      //   background: #BA0124;
      //   color: #fff;
      // }
      .el-menu-vertical-warp {
        .el-menu-item {
          color: #333;
          height: 46px;
          display: flex;
          justify-content: space-between;
        }
        .el-menu-item.is-active {
          color: #fff;
          background: #BA0124;
        }
      }
    }
    .rightCont {
      background: $contBack;
      border-radius: $contRadius;
      min-height: 200px;
      padding: $contPadding;
      flex-grow: 1;
    }
  }
}
</style>
