<template>
  <div class="wrapper" :class="getColorTheme && 'dark'">
    <headerComponent></headerComponent>
    <div class="content">
      <div v-if="error">
        <errorComponent></errorComponent>
        <b-button type="is-primary" @click="requestEmployees">
          Загрузить
        </b-button>
      </div>

      <div v-else>
        <div v-if="loading">
          <loadingComponent></loadingComponent>
        </div>
        <div v-else>
          <div>
            <addEmployeeComponent></addEmployeeComponent>
            <tableComponent></tableComponent>

            <alertComponent :data="{}"></alertComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import loadingComponent from './common/loading'
import errorComponent from './common/error'
import headerComponent from './header'
import addEmployeeComponent from './addEmployee'
import alertComponent from './common/alert'
import tableComponent from './table'

export default {
  components: {
    loadingComponent,
    errorComponent,
    headerComponent,
    addEmployeeComponent,
    alertComponent,
    tableComponent
  },
  name: 'Main',
  computed: mapGetters(['loading', 'error', 'getColorTheme']),
  methods: mapActions(['requestEmployees', 'showOrHideAlert']),
  mounted() {
    this.requestEmployees()
  },
}

</script>

<style scoped lang="scss">
@media (max-width: 850px) { 
  .wrapper {
    .content {
      padding: 0 15px;
    }
  }
 }

.wrapper {
  height: 100%;
  min-height: 100vh;
  padding-bottom: 50px;

  .content {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }
}

.dark {
  background: #515B64;
}
</style>
