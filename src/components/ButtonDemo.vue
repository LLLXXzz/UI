<template>
  <h1>Button 组件</h1>
  <Demo :component="ButtonDemo1" />
  <Demo :component="ButtonDemo2" />
  <Demo :component="ButtonDemo3" />
  <Demo :component="ButtonDemo4" />
  <Demo :component="ButtonDemo5" />
</template>
<script>
import Button from "../lib/button.vue";
import ButtonDemo1 from "./ButtonDemo1.vue";
import ButtonDemo2 from "./ButtonDemo2.vue";
import ButtonDemo3 from "./ButtonDemo3.vue";
import ButtonDemo4 from "./BD4.vue";
import ButtonDemo5 from "./ButtonDemo5.vue";

import Demo from "./Demo.vue";
export default {
  components: { Button, Demo },
  setup() {
    return { ButtonDemo1, ButtonDemo2, ButtonDemo3, ButtonDemo4, ButtonDemo5 };
  },
};
</script>