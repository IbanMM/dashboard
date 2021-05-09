<template>
  <n-link class="header-link" :class="subnav?'header-link_subnav':''" :to="route">
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
    },
    subnav: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-link {
    padding: 1.4rem 0;
    font-size: 1.5rem;
    text-decoration: none;
    display: block;
    border-bottom: 3px solid transparent;
    color: $grey-300;
    margin: 0 3rem;
    transition: all .3s linear;
    &.nuxt-link-active {
      color: $primary;
      @include media-up('lg') {
        color: $grey-300;
      }
    }
    &.nuxt-link-exact-active {
      border-bottom: 3px solid $primary;
      color: $primary;
    }
    @include media-up('xl') {
      font-size: 1rem;
    }
    &.header-link_subnav {
      padding: 0.5rem;
      font-size: 1.1rem;
      border-bottom: 1px solid transparent;
      &.nuxt-link-active {
        color: $grey-300;
      }
      &.nuxt-link-exact-active {
        border-bottom: 1px solid $primary;
        color: $primary;
      }
    }
  }
</style>
