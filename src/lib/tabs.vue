<template>
  <div>
    <div v-for="(t,index) in titles" :key='index'> 
        {{t}}
    </div>
    <component v-for="(c, index) in defaults" :is="c" :key="index" />
</template>
<script lang='ts'>
import Tab from "./tab.vue";
export default {
  setup(props, context) {
    //确定子组件的类型
    const defaults = context.slots.default();
    // console.log(defaults[0].type === Tab);
    defaults.forEach((tag) => {
      if (tag.type != Tab) {
        throw new Error("Tabs 子标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return { defaults, titles };
  },
};
</script>