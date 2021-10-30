<template>
  <div>
    <p>Dialog组件</p>
    <h1>示例1</h1>
    <Button @click="toggle">点击</Button>
    <Dialog v-model:visible="x" :closeOnclickOverlay="false" :ok="f1"></Dialog>
  </div>
</template>
<script>
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