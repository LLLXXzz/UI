<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="https://www.baidu.com">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import Topnav from "../components/TopnavDemo.vue";
export default {
  components: { Topnav },
};
</script>

<style lang='scss' scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 5em;
    }
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      //   $h变量
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h / 2;
      padding: 0 8px;
    }
  }
}
</style>
