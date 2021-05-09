<template>
  <h1 class="page-header">
    {{ text }}
  </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  font-weight: 900;
  font-size: 1.5rem;
  color: $dark;
  padding: 1.3rem 0;
  text-align: center;
  @include media-up('lg') {
    padding: 0;
    text-align: left;
  }
}
</style>
