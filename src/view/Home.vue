<template>
  <div class="TopnavAndBanner">
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
  <div class="features">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-Vue"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-typescript"></use>
    </svg>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-lighting"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import Topnav from "../components/TopnavDemo.vue";
export default {
  components: { Topnav },
};
</script>

<style lang='scss' scoped>
$green: #02bcb0;
$border-raduis: 4px;
$color: #007974;
.TopnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgb(172, 226, 223) 100%
  );
  clip-path: ellipse(90% 60% at 50% 40%);
}
.topnav {
  // background: pink;
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
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: $border-raduis;
      padding: 8px 24px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>
