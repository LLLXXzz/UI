<demo>
常规使用
</demo>
<template>
  <Button @click="toggle">点击</Button>
  <Dialog v-model:visible="x" :closeOnclickOverlay="false" :ok="f1">
    <!-- 具名插槽 -->
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <div>hi</div>
      <div>你好</div>
    </template>
  </Dialog>
</template>
<script lang='ts'>
import Dialog from "../lib/dialog.vue";
import Button from "../lib/button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);

    const toggle = () => {
      x.value = !x.value;
    };

    const f1 = () => {
      return true;
    };

    return { x, toggle, f1 };
  },
};
</script>