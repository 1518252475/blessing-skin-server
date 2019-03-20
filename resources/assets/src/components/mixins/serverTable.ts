import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    columns: [] as Array<{ field: string }>,
    totalRecords: 0,
    serverParams: {
      sortField: '',
      sortType: 'asc',
      page: 1,
      perPage: 10,
      search: '',
    },
  }),
  methods: {
    fetchData(): Promise<void> {
      return Promise.resolve()
    },
    onPageChange(params: { currentPage: number }) {
      this.serverParams.page = params.currentPage
      this.fetchData()
    },
    onPerPageChange(params: { currentPerPage: number }) {
      this.serverParams.perPage = params.currentPerPage
      this.fetchData()
    },
    onSortChange(params: { sortType: 'asc' | 'desc', columnIndex: number }) {
      this.serverParams.sortType = params.sortType
      this.serverParams.sortField = this.columns[params.columnIndex].field
      this.fetchData()
    },
    onSearch(params: { searchTerm: string }) {
      this.serverParams.search = params.searchTerm
      this.fetchData()
    },
  },
})
