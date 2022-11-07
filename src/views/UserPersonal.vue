<template>
  <!-- 个人中心 -->
  <div class="userCont">
    个人中心
  </div>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'UserPersonal',
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
