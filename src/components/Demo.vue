<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/button.vue";
import Prism from "prismjs";
import "../../node_modules/prismjs/themes/prism.css";
import { computed, ref } from "vue";
// import { computed } from "vue";
export default {
  props: {
    component: Object,
  },
  components: { Button },

  setup(props) {
    //利用计算属性
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    //标志是否展示代码
    const codeVisible = ref(false);
    //展示代码
    const showCode = () => {
      return (codeVisible.value = true);
    };
    //隐藏代码
    const hideCode = () => {
      return (codeVisible.value = false);
    };
    return { Prism, showCode, hideCode, codeVisible, html };
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