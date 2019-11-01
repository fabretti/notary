<template>
  <section class="container">
    <div></div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  methods: {
    showModal() {
      this.$modal.show("hello-world");
    },
    showSecondModal() {
      this.$modal.show("hel");
      this.$modal.hide("hello-world");
    }
  }
};
</script>

