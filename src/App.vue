<template>
  <div>
    <!-- 头部区域 -->
    <Header />
    <!-- 切换页面 -->
    <div class="content">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" :key="$router.name"/>
        </keep-alive>
      </router-view>
    </div>
  </div>
  
</template>
<script>

import Header from '@/views/Header.vue';
export default {
  name: 'app',
  components: {
    Header
  },
  setup() {


    return {
    };
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding-top: 15px;
  padding-bottom: 30px;
  width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 0;
}
</style>
