<demo>
支持双向绑定
</demo>
<template>
  <Input v-model="message"></Input>
  {{ message }}
</template>
<script>
import Input from "../lib/input.vue";

export default {
  components: { Input },
  data() {
    return {
      message: "hi",
    };
  },
};
</script>