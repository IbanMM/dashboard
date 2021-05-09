export const state = () => ({
  menu: false
})

export const getters = {
  /**
   * Return menu
   *
   */
  getMenu (state) {
    return state.menu
  }
}

export const actions = {
  /**
   * Toggle menu
   *
   */
  toggleMenu ({ commit }, menu) {
    commit('SET_MENU', menu)
  }
}

export const mutations = {
  /**
   * Commit menu
   *
   */
  SET_MENU (state, menu) {
    state.menu = menu
  }
}
