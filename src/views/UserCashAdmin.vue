<template>
  <!-- 提现管理 -->
  <div class="UserCashAdmin">
    提现管理
  </div>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'UserCashAdmin',
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
