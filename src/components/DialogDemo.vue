<template>
  <div>
    <p>Dialog组件</p>
    <h1>示例1</h1>
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
    <h1>示例二</h1>
    <Button @click="showDialog">show</Button>
  </div>
</template>
<script>
import Dialog from "../lib/dialog.vue";
import Button from "../lib/button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
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
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        ok: () => {
          console.log("ok");
        },
      });
    };
    return { x, toggle, f1, showDialog };
  },
};
</script>