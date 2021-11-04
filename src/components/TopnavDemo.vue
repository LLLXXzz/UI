<template>
  <div class="topnav">
    <div class="logo" @click="toogleMenu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <span class="toggleAside" @click="toogleMenu"></span>
  </div>
</template>
<script lang='ts'>
import { inject, Ref } from "vue";

export default {
  setup() {
    //Ref 类型都是大写 里面是个布尔值
    const asideVisible = inject<Ref<boolean>>("xxx");

    const toogleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toogleMenu };
  },
};
</script>
<style lang='scss' scoped>
$color: #007974;
.topnav {
  // background: pink;
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 5em;
    }
    // 0-500px
  }
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>