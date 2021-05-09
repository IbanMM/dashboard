<template>
  <header class="flex-xs justify-between-xs align-items-xs header">
    <avatar />
    <nav class="header_nav flex-xs align-items-xs flex-col-xs flex-row-xl justify-center-xs justify-start-xl" :style="menuStyles">
      <ul class="flex-xs align-items-xs flex-col-xs flex-row-xl justify-center-xs justify-start-xl">
        <li>
          <header-nav-link
            :text="'Overview'"
            :route="'/'"
          />
          <ul class="flex-xs align-items-xs flex-col-xs flex-row-xl justify-center-xs justify-start-xl display-none-lg header_subnav">
            <li>
              <header-nav-link
                :text="'Chat'"
                :route="'/chat'"
                :subnav="true"
              />
            </li>
            <li>
              <header-nav-link
                :text="'Messages'"
                :route="'/messages'"
                :subnav="true"
              />
            </li>
            <li>
              <header-nav-link
                :text="'Files'"
                :route="'/files'"
                :subnav="true"
              />
            </li>
            <li>
              <header-nav-link
                :text="'Settings'"
                :route="'/settings'"
                :subnav="true"
              />
            </li>
          </ul>
        </li>
        <li>
          <header-nav-link
            :text="'Campaings'"
            :route="'campaings'"
          />
        </li>
        <li>
          <header-nav-link
            :text="'Analytics'"
            :route="'analytics'"
          />
        </li>
      </ul>
    </nav>
    <button-ui
      :text="'Premium'"
      :state="'primary'"
    />
    <burger />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('layout', ['getMenu']),
    /**
     * Styles for the menu on mobile devices
     */
    menuStyles: function () {
      const styles = {}
      if (this.getMenu) {
        styles.display = 'flex'
      } else {
        styles.display = 'none'
      }
      return styles
    }
  }
}
</script>

<style lang="scss">
  .header {
    grid-area: header;
    height: $header-height;
    border-bottom: 1px solid rgba($grey-100, 0.2);
    background-color: #fff;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    @include media-up('xl') {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .header_nav {
    position: fixed;
    display: none;
    top: $header-height;
    left: 0;
    min-height: calc( 100vh - #{$header-height});
    background-color: #fff;
    width: 100%;
    @include media-up('xl') {
      position: relative;
      top:0;
      min-height: 1rem;
      width: auto;
      align-items: center;
      display: block!important;
      background-color: transparent;
    }
  }
</style>
