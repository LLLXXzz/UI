<template>
  <div>
    <!-- value不加: 代表字符串 加上v-bind绑定则会判断数据类型-->
    <!-- $event用来接收子组件传递的新数据 -->
    <!-- @input用来接收子组件数据的事件，名字可自定义 -->
    <Switch :value="y" @input="y = $event" />
    {{ y }}
  </div>
</template>
<script lang='ts'>
import { ref } from "vue";
import Switch from "../lib/switch.vue";
export default {
  setup() {
    //ref相当于一个盒子 .value取里面的值
    const y = ref(false);
    return { y };
  },
  components: { Switch },
};
</script>