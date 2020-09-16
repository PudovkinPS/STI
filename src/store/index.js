import Vue from 'vue'
import Vuex from 'vuex'
import Employee from './modules/employee'
import Main from './modules/main'
import AddEmployee from './modules/addEmployee'
import Alert from './modules/alert'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Employee,
    Main,
    AddEmployee,
    Alert
  }
})
