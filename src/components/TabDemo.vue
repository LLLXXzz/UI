<template>
  <div>
    <div>Tabs组件</div>
    <h1>示例1</h1>
    <Tabs>
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
  </div>
</template>
<script>
import Tab from "../lib/tabs.vue";
import Tabs from "../lib/tabs.vue";
export default {
  components: { Tab, Tabs },
  setup() {},
};
</script>