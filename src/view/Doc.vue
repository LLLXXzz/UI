<template>
  <div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible />
    <div class="content">
      <aside class="aside_menu" :class="{ visible: asideVisible }">
        <h2>介绍</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/getStart">开始</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tab">Tab组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang = 'ts'>
import Topnav from "../components/TopnavDemo.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    //get
    const asideVisible = inject<Ref<boolean>>("xxx");
    return { asideVisible };
  },
};
</script>

<style lang='scss' scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
  > .nav {
    flex: 0;
  }
  > .content {
    display: flex;
    flex: 1;
    padding-top: 80px;
    padding-left: 156px;
    > .aside_menu {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      margin-top: 80px;
      height: auto;
      width: 260px;
      overflow-x: hidden;
      overflow-y: hidden;
      border-right: 1px solid #e8e8e8;
      z-index: 10;
      // background: lightblue;
      box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
      // padding: 16px 0;
      // padding-top: 70px;
      padding-bottom: 32px;
      > h2 {
        margin-bottom: 4px;
        line-height: 22px;
        padding: 10px;
        font-size: 22px;
        font-weight: 700;
      }
      > ol {
        > li {
          position: relative;
          width: 100%;
          font-size: 16px;
          > a {
            display: block;
            padding: 12px 20px;
            cursor: pointer;
            color: #333;
            &:hover {
              background: #e5f2fa;
              border-bottom: none;
            }
          }
          //高亮当前路由
          .router-link-active {
            background-color: #e5f2fa;
            border-right: none;
            &:after {
              content: "";
              position: absolute;
              display: block;
              top: 0;
              right: 0;
              width: 3px;
              height: 100%;
              animation: bdrolate 0.8s;
              background-color: #6b9ab8;
            }
          }
        }
      }
    }
    main {
      flex: 1;
      overflow: auto;
      padding: 16px 180px;
    }
  }
  @keyframes bdrolate {
    0% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
}
@media (max-width: 500px) {
  .layout {
    > .content {
      padding-left: 0;
      .aside_menu {
        width: 180px;
        background-color: #fff;
        transition: all 0.25s ease;
        transform: translateX(-200px);
        &.visible {
          transform: translateX(0px);
        }
      }
      main {
        overflow: auto;
        padding: 20px 8px;
        margin: 0 auto;
      }
    }
  }
}
</style>