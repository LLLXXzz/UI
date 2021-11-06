<template>
  <div>Switch组件</div>
  <div>
    <!-- value不加: 代表字符串 加上v-bind绑定则会判断数据类型-->
    <!-- $event用来接收子组件传递的新数据 -->
    <!-- @input用来接收子组件数据的事件，名字可自定义 -->
    <!-- <Switch :value="y" @update:value="y = $event" /> -->
    <!-- 使用v-model实现value自动监听（双向绑定） -->
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch v-model:value="y" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持disabled</h2>
      <div class="demo-component">
        <Switch v-model:value="bool" disabled />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool" disabled /&gt;</pre>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { ref } from "vue";
import Switch from "../lib/switch.vue";
import Button from "../lib/button.vue";
export default {
  setup() {
    //ref相当于一个盒子 .value取里面的值
    const y = ref(false);
    return { y };
  },
  components: { Switch, Button },
};
</script>
<style lang='scss' scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>