<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-tomato"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <span
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="toogleMenu"
    >
      <transition name="fade">
        <svg v-if="asideVisible">
          <use xlink:href="#icon-close"></use>
        </svg>
        <svg v-else>
          <use xlink:href="#icon-caidan"></use>
        </svg>
      </transition>
    </span>
  </div>
</template>
<script lang='ts'>
import { inject, Ref } from "vue";

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    //Ref 类型都是大写 里面是个布尔值
    const asideVisible = inject<Ref<boolean>>("xxx");

    const toogleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toogleMenu, asideVisible };
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
      width: 48px;
      height: 48px;
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
    width: 32px;
    height: 32x;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    // background: fade-out($color: #000000, $amount: 0.9);
    > svg {
      width: 32px;
      height: 32px;
    }
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
    > svg {
      width: 32px;
      height: 32px;
    }
  }
}
</style>