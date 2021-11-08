<template>
  <h1>Switch组件</h1>
  <div>
    <!-- value不加: 代表字符串 加上v-bind绑定则会判断数据类型-->
    <!-- $event用来接收子组件传递的新数据 -->
    <!-- @input用来接收子组件数据的事件，名字可自定义 -->
    <!-- <Switch :value="y" @update:value="y = $event" /> -->
    <!-- 使用v-model实现value自动监听（双向绑定） -->
    <!-- <div class="demo">
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
    </div> -->
    <Demo :component="SwitchCode1" />
    <!-- <div class="demo">
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
    </div> -->
    <Demo :component="SwitchCode2" />
  </div>
</template>
<script lang='ts'>
import { ref } from "vue";
import SwitchCode1 from "./SwitchCode1.vue";
import SwitchCode2 from "./SwitchCode2.vue";
import Demo from "./Demo.vue";

export default {
  components: { SwitchCode1, SwitchCode2, Demo },
  setup() {
    return { SwitchCode1, SwitchCode2 };
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