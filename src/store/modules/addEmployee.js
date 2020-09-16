export default {
  actions: {
    changeName(state, str) {
      this.commit('changeName', str)
    },
    changePhone(state, str) {
      this.commit('changePhone', str)
    },
    addNewEmployee() {
      let Employee = this.getters.getProfileEmployee

      this.dispatch('isValidateEmployeeParams', Employee).then((result) => {
        if (result) {

          if (!this.getters.getEmployees.length) {
            Employee.id = 1
          } else {
            Employee.id = Math.max(...this.getters.getEmployees.map(i => +i.id)) +1
          }
          
          this.commit('addEmployee', {...Employee})

          let name = Employee.full_name
          this.dispatch('changeSettingslert', {show: true, text: `Сотрудник ${name} добавлен`})

          this.dispatch('changeName', '')
          this.dispatch('changePhone', '')
          this.commit('errorValidate', false)
        } else {
          this.commit('errorValidate', true)
        }
      })
    },
    isValidateEmployeeParams(state, employee) {
      let regexp = new RegExp(/^[\s()+-]*([0-9][\s()+-]*){10,11}$/)

      if (employee.phone.match(regexp)) {
        if (employee.full_name.trim().length >= 2) {
          return true
        }
      }
      return false
    },
    deleteEmployee(state, id) {
      let getEmployees = this.getters.getEmployees
      getEmployees.forEach((item, index) => {
        if (item.id === id) {
          this.dispatch('changeSettingslert', {show: true, text: `Сотрудник ${item.full_name} удален`})
          getEmployees.splice(index, 1);
        }
      })

      this.commit('updateEmployees', getEmployees)
    }
  },
  mutations: {
    errorValidate(state, type) {
      state.error.show = type
    },
    changeName(state, str) {
      state.employee.full_name = str
    },
    changePhone(state, str) {
      state.employee.phone = str
    },
  },
  state: {
    employee: {
      full_name: '',
      phone: ''
    },
    error: {
      show: false,
      text: 'Введите корректные значения'
    }
  },
  getters: {
    getProfileEmployee(state) {
      return state.employee
    },
    getNameEmployee(state) {
      return state.employee.full_name
    },
    getPhoneEmployee(state) {
      return state.employee.phone
    },
    getErrorValidate(state) {
      return state.error
    }
  }
}