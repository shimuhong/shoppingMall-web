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
        <el-button type="danger" @click="close">
          Close
        </el-button>
      </div>
    </template>
    <div class="dialogContent">
      <slot/>
    </div>
  </el-dialog>
</template>
<script>
import { ref, onMounted, reactive, toRefs } from 'vue';
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
      close
    };
  }
}
</script>

<style>
.el-dialog.dialog {
  border-radius: 32px;
  line-height: normal;
}
.el-dialog.dialog .el-dialog__header {
  padding-top: 0;
  padding-bottom: 0;
}
.el-dialog.dialog .el-dialog__body {
  padding: 50px 75px;
}
.el-dialog.dialog .el-dialog__body .dialogContent {
  min-height: 100px;
}
</style>
