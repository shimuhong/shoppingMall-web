<template>
   <el-dialog
    :append-to-body="true"
    :show-close="false"
    v-model="dialogVisible"
    :width="width"
    class="dialog"
  >
    <template v-if="hasHeader" #header="{ close, titleId, titleClass }">
      <div class="dialogHeader">
        <h4 :id="titleId" :class="titleClass">{{title}}</h4>
        <img :src="icon_close"  @click="close"/>
      </div>
    </template>
    <div class="dialogContent">
      <slot/>
    </div>
  </el-dialog>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';
import icon_close from '@/assets/icon_close.png';
export default {
  name: 'Dialog',
  components: {
    
  },
  props: {
    title: {
      type: String,
      default: () => '',
    },
    width: {
      type: String,
      default: () => '557px',
    },
    hasHeader: {
      type: Boolean,
      default: () => false,
    },
  },
  setup() {
    
    const params = reactive({
      dialogVisible: false,
    });
    
    const open = () => {
      console.log('openDialog')
      params.dialogVisible = true;
    }
    const close = () => {
      console.log('close')
      params.dialogVisible = false;
    }

    return {
      ...toRefs(params),
      open,
      close,
      icon_close
    };
  }
}
</script>

<style>
.el-dialog.dialog {
  border-radius: 32px;
  line-height: normal;
}
.el-dialog.dialog .dialogHeader {
  display: flex;
  justify-content: space-between;
}
.el-dialog.dialog .dialogHeader img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.el-dialog.dialog .el-dialog__header {
  padding: 20px;
  margin: 0;
}
.el-dialog.dialog .el-dialog__body {
  /* padding: 50px 75px; */
  padding: 10px 20px 20px;
}
.el-dialog.dialog .el-dialog__body .dialogContent {
  min-height: 50px;
}
</style>
