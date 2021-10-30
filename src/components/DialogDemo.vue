<template>
  <div>
    <p>dialogDemo</p>
    <h1>示例1</h1>
    <Button @click="toggle">点击</Button>
    <Dialog :visible="x"></Dialog>
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
    return { x, toggle };
  },
};
</script>