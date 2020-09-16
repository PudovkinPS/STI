<template>
  <div class="table">
    <b-table
      v-if="getEmployees.length"
      :data="getEmployees">

      <b-table-column field="id" label="ID" centered width="100" v-slot="props">
        {{ props.row.id }}
      </b-table-column>
      <b-table-column field="full_name" label="ФИО" v-slot="props">
        <div class="table-td">
          {{ props.row.full_name }}
        </div>
      </b-table-column>
      <b-table-column field="pahone" label="Телефон" v-slot="props">
        <div class="table-td">
          {{ props.row.phone }}
        </div>
      </b-table-column>
      <b-table-column label="Удалить" centered width="50"  v-slot="props">
        <b-button @click="deleteEmployee(props.row.id)" type="is-danger">Удалить</b-button>
      </b-table-column>
    </b-table>

    <div class="text" v-else>Таблица пуста, добавьте сотрудников</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "tableComponent",
  computed: mapGetters(['getEmployees']),
  methods: mapActions(['deleteEmployee']),
};
</script>

<style lang="scss">
@media (max-width: 800px) { 
  .dark {
    .table tr {
      background: #2c3236 !important;
    }
    .table td {
      color: white !important;
    }
  }
}

.table {
  border: 1px solid #2c3236;
  border-radius: 5px;
  margin-top: 50px;
  padding: 25px;

  .table-td {
    text-align: left;
    max-width: 225px;
  }

  .text {
    font-weight: bold;
    font-size: 20px;
  }

  .table {
    padding: 0;
    margin: 0;
  }
}

.dark {
  .table {
    background: #2c3236;

    div {
      color: white !important;
    }

    .has-text-centered {
      color: white !important;
    }
  }
}
</style>
