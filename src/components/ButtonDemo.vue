<template>
  <div>Button 示例</div>
  <h1>示例一</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="text">你好</Button>
    <Button theme="link">你好</Button>
  </div>
  <h1>示例二</h1>
  <div>
    <Button size="small">小小小</Button>
    <Button>普通</Button>
    <Button size="big">大大大</Button>
  </div>
</template>
<script>
import Button from "../lib/button.vue";
export default {
  components: { Button },
  setup() {},
};
</script>