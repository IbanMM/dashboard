<template>
  <aside class="sidebar sidebar-nav">
    <nav>
      <ul>
        <li>
          <sidebar-nav-link
            :icon="'dashboard'"
            :route="'/'"
          />
        </li>
        <li>
          <sidebar-nav-link
            :icon="'chat'"
            :route="'/chat'"
          />
        </li>
        <li>
          <sidebar-nav-link
            :icon="'envelope'"
            :route="'/messages'"
          />
        </li>
        <li>
          <sidebar-nav-link
            :icon="'folder'"
            :route="'/files'"
          />
        </li>
        <li>
          <sidebar-nav-link
            :icon="'settings'"
            :route="'/settings'"
          />
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
  .sidebar {
    grid-area: sidebar;
    background-color: $light;
    min-height: calc( 100vh - #{$header-height});
    border-right: 1px solid rgba($grey-100, 0.2);
  }
</style>
