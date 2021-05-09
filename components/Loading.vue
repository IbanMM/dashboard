<template>
  <div>
    <div class="loading" :style="loadingClasses" />
  </div>
</template>

<script>
export default {
  props: {
    colorBackground: {
      type: String,
      default: '#000000'
    },
    color: {
      type: String,
      default: '#000000'
    },
    size: {
      type: Number,
      default: 23
    }
  },
  computed: {
    /**
     * Styles for the loading based in its props
     */
    loadingClasses: function () {
      const styles = {
        width: this.size + 'rem',
        height: this.size + 'rem',
        border: 'solid 0.5rem' + this.colorBackground,
        borderTop: 'solid 0.5rem' + this.color
      }
      return styles
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  border-radius: 50%;
  animation-duration: 1.5s;
  animation-name: loading;
  animation-iteration-count: infinite;
}
@keyframes loading {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
</style>
