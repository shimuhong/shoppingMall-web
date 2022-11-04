<template>
  <div>
    <!-- 头部区域 -->
    <Header />
    <!-- 切换页面 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$router.name"/>
      </keep-alive>
    </router-view>
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
</style>
