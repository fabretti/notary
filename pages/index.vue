<template>
  <section class="container">
    <div></div>
  </section>
</template>

<script>
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

