import { getEmployeesAjax } from '@/request/getEmployees'

export default {
  actions: {
    async requestEmployees() {
      this.commit('isLoading', true)
      this.commit('errorRequest', false)

      await getEmployeesAjax().then(function(response) {
        this.commit('updateEmployees', response.Employees)
      }.bind(this))
      .catch(function() {
        this.commit('errorRequest', true)
      }.bind(this))

      this.commit('isLoading', false)
    },
  },
  mutations: {
    addEmployee(state, employee) {
      state.listEmployees.push(employee)
    },
    updateEmployees(state, listEmployees) {
      state.listEmployees = listEmployees
    },
    isLoading(state, value) {
      state.isLoading = value
    },
    errorRequest(state, value) {
      state.isError = value
    }
  },
  state: {
    isLoading: true,
    listEmployees: [],
    isError: false
  },
  getters: {
    loading(state) {
      return state.isLoading
    },
    error(state) {
      return state.isError
    },
    getEmployees(state) {
      return state.listEmployees
    }
  }
}