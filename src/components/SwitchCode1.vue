<demo>
常规用法
</demo>
<template>
  <Switch v-model:value="bool" />
</template>
<script lang='ts'>
import { ref } from "vue";
import Switch from "../lib/switch.vue";
export default {
  components: { Switch },
  setup() {
    //ref相当于一个盒子 .value取里面的值
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>