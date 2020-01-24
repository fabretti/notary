<template>
  <div class="customSelect">
    <div class="custom__selected" :tabindex="tabindex" @blur="open = false">
      <div class="custom__title" 
          :class="{ open: open }" 
          @click="open = !open"
      >
        <p>{{ selected }}</p>
        <i class="icon-arrow" :class="{ rotate: open }"></i>
      </div>
      <div class="custom__list" :class="{ selectHide: !open }">
        <div
          class="item"
          v-for="(option, i) of options"
          :key="i"
          @click="
            selected = option.title;
            open = false;
            $emit('input', option.value);
          "
        >
          {{ option.title }}
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
    },
    value: {default : null}
  },
  data() {
    return {
      selected: null,
      open: false,
      rotate: false
    };
  },
  watch: {
    options(newOptions) {
      if (newOptions.length > 0 && this.value === null) {
        let o = newOptions[0]
        this.selected = o.title
        this.$emit('input', o.value)
      }
    }
  },
  mounted() {
    this.$emit("input", this.selected);
  }
};
</script>
