<template>
  <div class="orderDetail">
    <img :src="detailImg">
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, reactive, toRefs } from 'vue';
import detailImg from '@/assets/detailImg.jpg';
export default {
  name: 'orderDetail',
  components: {
    
  },
  setup() {
    const router = useRouter();
    const $route = useRoute();

    const params = reactive({
    });



    return {
      ...toRefs(params),
      detailImg
    };
  }
}

</script>
<style lang="scss" scoped>
.orderDetail {
  img {
    width: 100%;
  }
}
</style>
