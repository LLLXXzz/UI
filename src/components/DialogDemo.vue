<template>
  <h1>Dialog组件</h1>
  <div>
    <Demo :component="DialogDemo1" />
    <Demo :component="DialogDemo2" />
  </div>
</template>
<script>
import Demo from "./Demo.vue";
import DialogDemo1 from "./DialogDemo1.vue";
import DialogDemo2 from "./DialogDemo2.vue";

import Dialog from "../lib/dialog.vue";
import Button from "../lib/button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Demo, Dialog, Button },
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
    return { x, toggle, f1, showDialog, DialogDemo1, DialogDemo2 };
  },
};
</script>