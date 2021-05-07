<template>
  <div class="flex-lg align-items-lg">
    <div class="page-header-bar" :style="{ width: barWidth + 'px' }">
      <div class="page-header-bar_fill" :style="{ width: barFill + 'px' }" />
    </div>
    <div class="page-header-bar_text">
      <strong>{{ barNumber }}</strong>
      <span>{{ barText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    barWidth: {
      type: Number,
      default: 400
    },
    barFill: {
      type: Number,
      default: 0
    },
    barNumber: {
      type: Number,
      default: 0
    },
    barText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header-bar{
  position: relative;
  background-color: $grey-500;
  height: 0.5rem;
  border-radius: 0.25rem;
}
.page-header-bar_fill{
  position: absolute;
  top: 0;
  left: 0;
  background-color: $primary;
  height: 0.5rem;
  border-radius: 0.25rem;
}
.page-header-bar_text {
  padding-left: 1rem;
  font-size: 1.1rem;
  color: $grey-300;
  strong{
    font-weight: 700;
    color: $dark;
  }
}
</style>
