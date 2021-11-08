<template>
  <h1>Tabs组件</h1>
  <div>
    <Demo :component="TabDemo1" />
  </div>
</template>
<script lang='ts'>
import Demo from "./Demo.vue";
import TabDemo1 from "./TabDemo1.vue";
export default {
  components: { Demo },
  setup() {
    return { TabDemo1, Demo };
  },
};
</script>