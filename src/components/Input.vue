<template>
  <h1>Input 组件</h1>
  <Demo :component="InputDemo1"></Demo>
  <Demo :component="InputDemo2"></Demo>
  <Demo :component="InputDemo3"></Demo>
  <Demo :component="InputDemo4"></Demo>
  <Demo :component="InputDemo5"></Demo>
</template>
<script>
import Input from "../lib/input.vue";
import Demo from "./Demo.vue";
import InputDemo1 from "./InputDemo1.vue";
import InputDemo2 from "./InputDemo2.vue";
import InputDemo4 from "./InputDemo4.vue";
import InputDemo3 from "./InPD3.vue";
import InputDemo5 from "./InPD5.vue";
export default {
  components: {
    Input,
    Demo,
    InputDemo1,
    InputDemo2,
    InputDemo3,
    InputDemo4,
    InputDemo5,
  },
  setup() {
    return {
      Input,
      Demo,
      InputDemo1,
      InputDemo2,
      InputDemo4,
      InputDemo3,
      InputDemo5,
    };
  },
};
</script>
