<template>
  <template v-if="visible">
    <!-- 遮罩层 -->
    <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
    <div class="gulu-dialog-wrapper">
      <div class="gulu-dialog">
        <header>
          <slot name="title" />
          <span class="gulu-dialog-close" @click="close"></span>
        </header>
        <main>
          <slot name="content" />
        </main>
        <footer>
          <Button @click="close">取消</Button>
          <Button level="main" @click="ok">确认</Button>
        </footer>
      </div>
    </div>
  </template>
</template>
   
<script>
import Button from "../lib/button.vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    //true 点击遮罩层关闭 false点击不关闭
    closeOnclickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };

    const onClickOverlay = () => {
      console.log(props.closeOnclickOverlay);
      if (props.closeOnclickOverlay) {
        console.log("222");
        close();
      }
    };

    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    return { close, onClickOverlay, ok };
  },
};
</script>
<style lang='scss'>
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out($color: #000000, $amount: 0.5);
  min-width: 20em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade-out($color: #000000, $amount: 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>