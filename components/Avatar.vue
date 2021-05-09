<template>
  <div v-if="picture" class="avatar">
    <img class="avatar_img" :src="picture.thumbnailUrl" :alt="picture.title">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  async fetch () {
    const pic = await this.fetchPicture()
  },
  computed: {
    ...mapGetters('account', ['getPicture']),
    picture: function () {
      return this.getPicture
    }
  },
  methods: {
    ...mapActions('account', ['fetchPicture'])
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  background-color: $light;
  border: 2px solid $primary;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
}
.avatar_img {
  object-fit: cover;
  height: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
