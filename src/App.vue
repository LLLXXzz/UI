<template>
  <router-view />
</template>

<script lang='ts'>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const asideVisible = ref(false);
    //set 标记所有的后代都可以使用
    provide("xxx", asideVisible);
  },
};
</script>
