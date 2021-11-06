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
        <SwitchCode1 />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre
          v-html="
            Prism.highlight(
              SwitchCode1.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        />
      </div>
    </div>
    <div class="demo">
      <h2>支持disabled</h2>
      <div class="demo-component">
        <SwitchCode2 />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre
          v-html="
            Prism.highlight(
              SwitchCode2.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        ></pre>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { ref } from "vue";
import Switch from "../lib/switch.vue";
import Button from "../lib/button.vue";
import SwitchCode1 from "./SwitchCode1.vue";
import SwitchCode2 from "./SwitchCode2.vue";
import Prism from "prismjs";
import "../../node_modules/prismjs/themes/prism.css";

export default {
  components: { Switch, Button, SwitchCode1, SwitchCode2 },
  setup() {
    //ref相当于一个盒子 .value取里面的值
    const bool = ref(false);
    return { bool, SwitchCode1, SwitchCode2, Prism };
  },
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