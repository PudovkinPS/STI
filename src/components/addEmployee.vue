<template>
  <div class="addNewEmployee" :class="getErrorValidate.show && 'danger'">
    <div class="error-text" v-show="getErrorValidate.show">{{ getErrorValidate.text }} </div>
    <b-field label="ФИО">
      <b-tooltip label="Минимальное количество символов 2">
        <b-input type="is-success" :value="getNameEmployee" @input="changeName"></b-input>
      </b-tooltip>
    </b-field>

    <b-field label="Телефон">
      <b-tooltip label="Введите корректный телефон">
        <b-input type="is-success" :value="getPhoneEmployee" @input="changePhone"></b-input>
      </b-tooltip>
    </b-field>

    <b-button @click="addNewEmployee()" type="is-primary">Добавить</b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "addNewEmployee",
  methods: mapActions(['addNewEmployee', 'changeName', 'changePhone']),
  computed: mapGetters(['getPhoneEmployee', 'getNameEmployee', 'getErrorValidate']),
};
</script>

<style lang="scss">
@media (max-width: 850px) { 
  .addNewEmployee {
    padding: 0 15px;
    width: 100% !important;
  }
 }

.addNewEmployee {
  width: 50%;
  border: 1px solid #2c3236;
  width: 50%;
  padding: 25px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  
  .label {
    text-align: left;
  }

  .button {
    width: 100px;
  }

  .field {
    span {
      width: 100%;
    }
  }
}

.danger {
  border-color: red;
  .error-text {
    text-align: left;
    color: red !important;
    font-weight: bold;
    margin-bottom: 15px;
  }
}

.dark {
  .addNewEmployee {
    background: #2c3236;

    input {
      background: transparent;
      color: white;
    }

    .label {
      color: white;
    }
  }
}
</style>
