<template>
  <router-view />
</template>

<script lang='ts'>
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    //获取屏幕宽度
    const width = document.documentElement.clientWidth;
    //根据屏幕宽度来决定初始值
    const asideVisible = ref(width <= 500 ? false : true);
    //标记所有的后代都可以使用  相当于set
    provide("xxx", asideVisible);
    router.afterEach(() => {
      // console.log("路由跳转了");
      if (width <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
