<template>
  <n-link class="header-link" :to="route">
    <span class="sidebar-icon-container">
      {{ text }}
    </span>
  </n-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-link {
    @include media-up('lg') {
      padding: 1.4rem 0;
      text-decoration: none;
      display: block;
      border-bottom: 3px solid transparent;
      color: $grey-300;
      margin: 0 3rem;
      transition: all .3s linear;
      &.nuxt-link-exact-active {
        border-bottom: 3px solid $primary;
        color: $primary;
      }
    }
  }
</style>
