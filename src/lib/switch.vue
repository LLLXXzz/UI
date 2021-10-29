<template>
  <button @click="toggle" :class="{ checked: value }"><span></span></button>
</template>
<script lang='ts'>
import { ref } from "vue";
export default {
  props: { value: Boolean },
  setup(props, context) {
    // const checked = ref(false);
    const toggle = () => {
      // checked.value = !checked.value;
      context.emit("input", !props.value);
      //vue2 this.$emit()
      //emit(事件名，事件参数)
    };
    return { toggle };
  },
};
</script>

<style lang='scss' scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}
//白圆圈
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms;
}
// 当button拥有checked属性时
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button:focus {
  outline: none;
}
</style>