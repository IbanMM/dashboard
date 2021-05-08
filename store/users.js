export const state = () => ({
  users: []
})

export const getters = {
  /**
   * Return users
   *
   */
  getAllUsers (state) {
    return state.users
  }
}

export const actions = {
  /**
   * Get all users
   *
   */
  async fetchAllUsers ({ commit }) {
    const allUsers = await this.$axios.$get('/users')
    commit('SET_USERS', allUsers)
  }
}

export const mutations = {
  /**
   * Commit users to the state
   *
   */
  SET_USERS (state, allUsers) {
    state.users = allUsers
  }
}
