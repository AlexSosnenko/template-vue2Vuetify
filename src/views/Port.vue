<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Список портов</h1>
      </v-col>
    </v-row>
    <div>
      <v-data-table
        :headers="headers"
        :items="ports"
        item-key="port_code"
        class="elevation-1"
        :search="search"
        :custom-filter="filterText"
        :loading="loading"
        loading-text="Загрузка данных... Подождите"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Поиск..."
            class="mx-4"
          ></v-text-field>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Port',
  data() {
    return {
      search: '',
      loading: false,
      ports: []
      /*
      ports: [
        {
          port_code: 'SVO',
          port_name: 'Шереметьево',
          country: 'RU'
        },
        {
          port_code: 'CDG',
          port_name: 'Шарль де голль',
          country: 'FR'
        },
        {
          port_code: 'PEK',
          port_name: 'Пекин',
          country: 'KR'
        }
        ]
        */
    }
  },
  mounted() {
    this.loading = true
    fetch('https://lk_dev.shercargo.ru/json_port_data')
      .then(response => response.json())
      .then(data => {
        this.ports = data.ports
        this.loading = false
      })
  },
  computed: {
    headers() {
      return [
        {
          text: 'Код',
          align: 'start',
          sortable: true,
          value: 'port_code'
        },
        {
          text: 'Наименование',
          align: 'start',
          sortable: true,
          value: 'port_name'
        },
        {
          text: 'Страна',
          align: 'start',
          sortable: true,
          value: 'country'
        }
      ]
    }
  },
  methods: {
    filterText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === 'string' &&
        value
          .toString()
          .toLocaleUpperCase()
          .indexOf(search.toString().toLocaleUpperCase()) !== -1
      )
    }
  },
  loadData() {
    fetch('https://lk_dev.shercargo.ru/json_port_data')
      .then(response => response.json())
      .then(data => (this.ports = data.ports))
  }
}
</script>
