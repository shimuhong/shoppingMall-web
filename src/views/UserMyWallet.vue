<template>
  <!-- 我的钱包 -->
  <div class="userCont">
    我的钱包
  </div>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'UserMyWallet',
  components: {
  },
  setup() {

    const params = reactive({
    });

    return {
      ...toRefs(params),
    };
  }
}

</script>
<style lang="scss" scoped>
</style>
