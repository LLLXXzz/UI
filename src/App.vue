<template>
  <router-view />
</template>

<script lang='ts'>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    //获取屏幕宽度
    const width = document.documentElement.clientWidth;
    //根据屏幕宽度来决定初始值
    const asideVisible = ref(width <= 500 ? false : true);
    //set 标记所有的后代都可以使用
    provide("xxx", asideVisible);
  },
};
</script>
