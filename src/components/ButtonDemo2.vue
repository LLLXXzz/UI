<demo>
支持size
</demo>
<template>
  <div>
    <Button size="small">小小小</Button>
    <Button>普通</Button>
    <Button size="big">大大大</Button>
  </div>
  <div>
    <Button size="small" theme="text">小小小</Button>
    <Button theme="text">普通</Button>
    <Button size="big" theme="text">大大大</Button>
  </div>
  <div>
    <Button size="small" theme="link">小小小</Button>
    <Button theme="link">普通</Button>
    <Button size="big" theme="link">大大大</Button>
  </div>
</template>
<script lang='ts'>
import Button from "../lib/button.vue";
export default {
  components: { Button },
  setup() {},
};
</script>