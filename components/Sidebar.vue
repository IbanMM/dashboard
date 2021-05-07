<template>
  <aside class="sidebar sidebar-nav">
    <svg-icon class="icon" name="chat" />
    <svg-icon class="icon" name="dashboard" />
    <svg-icon class="icon" name="envelope" />
    <svg-icon class="icon" name="folder" />
    <svg-icon class="icon" name="settings" />
  </aside>
</template>

<style lang="scss">
  .sidebar {
    grid-area: sidebar;
    background-color: $light;
    min-height: calc( 100vh - #{$header-height});
    border-right: 1px solid rgba($grey-100, 0.2);
    padding: 1rem 0.8rem;
  }
</style>
