<template>
  <!-- 我的收藏 -->
  <div class="userCont">
    我的收藏
  </div>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'UserMyCollection',
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
