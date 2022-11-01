<template>
  <el-header>
    <div class="headerCont">
      <img :src="logo" alt="" class="logo">
      <div class="rightBox">
        <div>
          请注册
        </div>
        <div class="login" @click="loginClick">
          登录
        </div>
      </div>
    </div>
  </el-header>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$router.name"/>
    </keep-alive>
  </router-view>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
import logo from '@/assets/logo.svg';
import request from '@/utils/request/index.js';
export default {
  name: 'app',
  components: {
    
  },
  setup() {

    const loginClick = () => {
      console.log('loginClick:', import.meta.env)
      ElMessage({
        message: '报错了！',
        type: 'warning',
      })
      request({
        url: '/djstockorder-api/placeOrder/revocation',
        data: {
          placeOrderId: 111
        },
      }).then(res => {
        console.log('sss:', res)
      }).catch((err) => {
        console.log('err:', err)
      });
    }


    return {
      logo,
      loginClick
    };
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 80px;
  line-height: 80px;
  background: #252526 ;
  max-height: 100vh;
  .headerCont {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .rightBox {
      color: #fff;
      display: flex;
      .login {
        margin-left: 20px;
      }
    }
  }
}

.logo {
  width: 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
}
</style>
