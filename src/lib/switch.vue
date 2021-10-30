<template>
  <button
    class="gulu-switch"
    @click="toggle"
    :class="{ 'gulu-checked': value }"
  >
    <span></span>
  </button>
</template>
<script lang='ts'>
import { ref } from "vue";
export default {
  props: { value: Boolean },
  setup(props, context) {
    // const checked = ref(false);
    const toggle = () => {
      // checked.value = !checked.value;
      context.emit("update:value", !props.value);
      //vue2 this.$emit()
      //emit(事件名，事件参数)
    };
    return { toggle };
  },
};
</script>

<style lang='scss'>
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  //白圆圈
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  // 当button拥有checked属性时
  &.gulu-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }
  //当没有checked类时
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  //当有checked类时
  &.gulu-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>