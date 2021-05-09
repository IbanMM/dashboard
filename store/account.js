export const state = () => ({
  pic: false
})

export const getters = {
  /**
   * Return picture
   *
   */
  getPicture (state) {
    return state.pic
  }
}

export const actions = {
  /**
   * Get picture
   *
   */
  async fetchPicture ({ commit }) {
    const pic = await this.$axios.$get('/photos/1')
    commit('SET_PICTURE', pic)
  }
}

export const mutations = {
  /**
   * Commit picture
   *
   */
  SET_PICTURE (state, pic) {
    state.pic = pic
  }
}
