<template>
  <div class="customSelect">
    <div class="custom__selected" :tabindex="tabindex" @blur="open = false">
      <div class="custom__title" :class="{ open: open }" @click="open = !open">
        <p>{{ selected }}</p>
        <i class="icon-arrow" :class="{ rotate: open }"></i>
      </div>
      <div class="custom__list" :class="{ selectHide: !open }">
        <div
          class="item"
          v-for="(option, i) of options"
          :key="i"
          @click="
            selected = option;
            open = false;
            $emit('input', option);
          "
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false,
      rotate: false
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  }
};
</script>

<style lang="scss">
.custom__list {
  position: absolute;
  top: 30px;
  left: 0;
  background: #fff;
  font-weight: 500;
  border-radius: 4px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  min-width: 190px;
  z-index: 99;
  padding: 15px 0;
  text-align: left;

  .item {
    padding: 0 30px;
    cursor: pointer;
    font-size: 14px;
    color: #2d333d;
    line-height: 24px;

    &:hover {
      background: #dbebff;
    }

    &.selected {
      position: relative;
      font-weight: 600;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 14px;
        transform: translate(0, -50%);
        width: 6.5px;
        height: 6.5px;
        background: url("/check.svg") no-repeat;
      }
    }
  }
}
.selectHide {
  display: none;
}
</style>
