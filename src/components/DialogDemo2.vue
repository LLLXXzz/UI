<demo>
一键打开 Dialog
</demo>
<template>
  <Button @click="showDialog">show</Button>
</template>
<script lang='ts'>
import Button from "../lib/button.vue";
import { openDialog } from "../lib/openDialog";
import { h } from "vue";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok: () => {
          console.log("ok");
        },
      });
    };
    return { showDialog };
  },
};
</script>