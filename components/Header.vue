<template>
  <header class="header">
    <avatar />
    <nav>
      <ul class="header-nav">
        <li>
          <header-nav-link
            :text="'Overview'"
            :route="'/'"
          />
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
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .header {
    grid-area: header;
    height: $header-height;
    border-bottom: 1px solid rgba($grey-100, 0.2);
    background-color: #fff;
    padding: 1rem;
    @include media-up('lg') {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .header-nav {
    @include media-up('lg') {
      display: flex;
      align-items: center;
    }
  }
</style>
