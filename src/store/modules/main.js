export default {
  actions: {
    switchThemeColor(state, item) {
      this.commit('setColorTheme', item)
    }
  },
  mutations: {
    setColorTheme(state, color) {
      state.colorTheme = color
    },
  },
  state: {
    colorTheme: false,
  },
  getters: {
    getColorTheme(state) {
      return state.colorTheme
    },
  }
}