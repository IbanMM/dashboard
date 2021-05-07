<template>
  <n-link class="sidebar-link" :to="route">
    <span class="sidebar-icon-container">
      <svg-icon class="sidebar-icon" :name="icon" />
    </span>
  </n-link>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .sidebar-link {
    @include media-up('lg') {
      padding: 1.2rem 0;
      display: block;
      border-right: 3px solid transparent;
      color: $grey-300;
      margin: 3rem 0;
      &.nuxt-link-exact-active {
        border-right: 3px solid $primary;
        color: $primary;
      }
    }
  }
  .sidebar-icon-container {
    display: flex;
    justify-content: center;
  }
  .sidebar-icon {
    fill: $grey-300;
  }
</style>
