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
  <h1>示例三</h1>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button level="main" theme="link">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button level="danger" theme="link">危险链接按钮</Button>
    </div>
    <div>
      <Button level="main" theme="text">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button level="danger" theme="text">危险文字按钮</Button>
    </div>
  </div>
  <h1>示例四</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文字按钮</Button>
  </div>
</template>
<script>
import Button from "../lib/button.vue";
export default {
  components: { Button },
  setup() {},
};
</script>