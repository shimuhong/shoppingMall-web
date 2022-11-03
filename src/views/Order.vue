<template>
  <div class="content">
    order
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, reactive, toRefs } from 'vue';
import carouselImg from '@/assets/carouselImg.png';
import prodImg from '@/assets/prodImg.png';
export default {
  name: 'order',
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
      btclick,
      carouselImg,
      prodImg
    };
  }
}

</script>
<style lang="scss" scoped>
</style>
