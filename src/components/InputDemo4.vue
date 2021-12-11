<demo>
errorMessage
</demo>
<template>
  <Input value="" error="名字不能少于两个字"></Input>
</template>
<script>
import Input from "../lib/input.vue";
export default {
  components: { Input },
};
</script>