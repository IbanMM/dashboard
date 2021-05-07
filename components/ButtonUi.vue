<template>
  <button class="button" :class="buttonClasses">
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClasses: function () {
      if (this.state === 'primary') {
        return 'button-primary'
      } else {
        return 'button-light'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  padding: 0.6rem 1rem;
  border-radius: 0.25rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all .2s linear;
}
.button-primary {
  background-color: $primary;
  color: $light;
  &:hover {
    background-color: darken($primary, 10%);
  }
}
.button-light {
  background-color: $light;
  color: $grey-300;
  border: 1px solid $grey-300;
  &:hover {
    color: $light;
    background-color: darken($grey-300, 3%);
  }
}
</style>
