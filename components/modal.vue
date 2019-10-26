<template>
  <div v-if="shown" class="modal">
    <div class="modal__header">{{ title }}</div>
    <div class="nodal__content">
      <slot></slot>
    </div>
    <div class="modal__footer">
      <slot name="actions">
        <button @click="hide">Close</button>
        <button @click="$emit('ok')">Ok</button>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: null }
  },

  data: () => ({
    shown: false
  }),

  methods: {
    show() {
      this.shown = true;
    },

    hide() {
      this.shown = false;
    }
  }
};
</script>
