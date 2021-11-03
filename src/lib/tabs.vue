<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        @click="select(t)"
        class="gulu-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        :ref="
          //如果这个元素的 t === selected（被选中的元素）将该元素赋值给selectItems
          (el) => {
            if (t === selected) selectItems = el;
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
import { onMounted, ref, onUpdated, watchEffect } from "vue";

export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    //<HTMLDivElement[]> 这里的([])是HTML div元素数组
    // const navItems = ref<HTMLDivElement[]>([]);
    //selectItemd保存被选中的元素
    const selectItems = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    //底部蓝线随着鼠标点击移动，并且宽度与元素相宽
    const x = () => {
      //打印navItems.value的值 值就是两个div
      //   console.log(...navItems.value);
      //获取两个div
      //   const divs = navItems.value;
      //找到class为seleced的div filter过滤
      //   const result = divs.filter((div) =>
      //     div.classList.contains("selected")
      //   )[0];
      //获取该元素宽度
      //   const width = result.getBoundingClientRect().width ;
      const { width } = selectItems.value.getBoundingClientRect();
      //让蓝线跟元素一样宽
      indicator.value.style.width = width + "px";
      const left1 = container.value.getBoundingClientRect().left;
      const left2 = selectItems.value.getBoundingClientRect().left;
      //相减
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    };

    //挂载之后 只渲染一次
    onMounted(() => {
      x();
    });
    //每次更新执行(鼠标点击)
    onUpdated(() => {
      x();
    });
    //替代 onMounted 和onUpdated 作用一致
    // watchEffect(() => {
    //   x();
    // });

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
    return { defaults, titles, select, indicator, container, selectItems };
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
      transition: all 250ms;
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