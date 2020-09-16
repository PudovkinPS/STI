export default {
  actions: {
    changeSettingslert(state, data) {
      this.commit('showAlert', data.show)
      this.commit('textAlert', data.text)
    },
  },
  mutations: {
    showAlert(state, item) {
      state.alert.show = item
    },
    textAlert(state, text) {
      state.alert.text = text
    },
  },
  state: {
    alert: {
      show: false,
      text: ''
    }
  },
  getters: {
    settingsAlert(state) {
      return state.alert
    },

  }
}