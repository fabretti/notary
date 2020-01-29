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
  methods: {
    setSelect() {
      if (this.value && this.options.length > 0) {
        let option = this.options.filter( i => i.value === this.value )[0]
        if (option) {
          this.selected = option.title
        } 
      } else if (this.options.length > 0 && this.value === null) {
        let o = this.options[0]
        this.selected = o.title
        this.$emit('input', o.value)
      }
    }
  },
  mounted() {
    this.setSelect()
  },
  // mounted() {
  //   this.$emit("input", this.selected);
  // },
};
</script>
