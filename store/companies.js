import axios from 'axios'

export const state = () => ({
  list: [],
  currentPage: null,
  quantityPages: null,
  map: [],
  item: {},
})

export const getters = {
  getList: s => s.list,
  getCurrentPage: s => s.currentPage,
  getQuantityPages: s => s.quantityPages,
  getMap: s => s.map,
  getItem: s => s.item,
}

export const mutations = {
  setList: (s, p) => (s.list = p),
  setCurrentPage: (s, p) => (s.currentPage = p),
  setQuantityPages: (s, p) => (s.quantityPages = p),
  setMap: (s, p) => (s.map = p),
  setItem: (s, p) => (s.item = p),
}

export const actions = {
  loadList({commit}, {page, districtId}) {
    const token = this.$cookies.get('token')
    axios({
        url: process.env.apiUrl + 'companies',
        method: 'GET',
        headers: {
          'X-Authorization': token,
        },
        params: {
          page,
          districtId,
        },
      })
      .then(e => {
        const data = e.data.data,
          list = data.items,
          currentPage = data.currentPage,
          quantityPages = data.quantityPages
        commit('setList', list)
        commit('setCurrentPage', currentPage)
        commit('setQuantityPages', quantityPages)
      })
      .catch(() => {})
  },
  loadMap({commit}, params = {}) {
    const token = this.$cookies.get('token')
    axios({
        url: process.env.apiUrl + 'companies/map',
        method: 'GET',
        headers: {
          'X-Authorization': token,
        },
        params,
      })
      .then(e => {
        const data = e.data.data
        commit('setMap', data)
      })
      .catch(() => {})
  },
  loadItem({commit}, id) {
    const token = this.$cookies.get('token')
    axios({
        url: process.env.apiUrl + 'companies/' + id,
        method: 'GET',
        headers: {
          'X-Authorization': token,
        },
      })
      .then(e => {
        const data = e.data.data
        commit('setItem', data)
      })
      .catch(() => {})
  },
  async sendReview({commit}, {id, ...data}) {
    const token = this.$cookies.get('token')
    let e = await axios({
      url: process.env.apiUrl + 'companies/' + id + '/rating',
        method: 'POST',
        headers: {
          'X-Authorization': token,
        },
        data,
    })
    .catch(() => false)
    
    if (e !== false) {
      commit('setItem', e.data.data)
    }
  }
}
