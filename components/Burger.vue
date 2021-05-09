<template>
  <div class="burger_container display-none-xl" :class="burgerActive?'active':''" @click.prevent="burgerToggle">
    <div class="burger" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      burgerActive: false
    }
  },
  watch: {
    /**
     * Burger to default state when route change
     */
    $route (to, from) {
      this.burgerActive = false
      this.toggleMenu(this.burgerActive)
    }
  },
  methods: {
    ...mapActions('layout', ['toggleMenu']),
    /**
     * Toggle the burger state
     */
    burgerToggle () {
      this.burgerActive = !this.burgerActive
      this.toggleMenu(this.burgerActive)
    }
  }
}
</script>

<style lang="scss">
.burger {
  @include burger(25px, 3px, 5px, $primary);
}
.burger_container {
  cursor: pointer;
  &.active {
    .burger {
      @include burger-to-cross();
    }
  }
}
</style>
