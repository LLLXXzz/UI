<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div
        @click="select(t)"
        class="gulu-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        "
        :class="{ selected: t === selected }"
      >
        {{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component
        class="gulu-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="(c, index) in defaults"
        :is="c"
        :key="index"
      />
    </div>
  </div>
</template>
<script lang='ts'>
import Tab from "./tab.vue";
import { onMounted, ref } from "vue";

export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    //<HTMLDivElement[]> 这里的([])是HTML div元素数组
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    //挂载之后
    onMounted(() => {
      //打印navItems.value的值 值就是两个div
      //   console.log(...navItems.value);
      //获取两个div
      const divs = navItems.value;
      //找到class为seleced的div filter过滤
      const result = divs.filter((div) =>
        div.classList.contains("selected")
      )[0];
      //获取该元素宽度
      //   const width = result.getBoundingClientRect().width ;
      const { width } = result.getBoundingClientRect();
      //让蓝线跟元素一样宽
      indicator.value.style.width = width + "px";
    });
    //确定子组件的类型
    const defaults = context.slots.default();
    // console.log(defaults[0].type === Tab);
    defaults.forEach((tag) => {
      if (tag.type != Tab) {
        throw new Error("Tabs 子标签必须是Tab");
      }
    });
    //获取组件中的标题  t代表每个标题
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title) => {
      context.emit("update:selected", title);
    };
    return { defaults, titles, select, navItems, indicator };
  },
};
</script>
<style lang='scss'>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>