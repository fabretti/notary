import axios from 'axios'

export const state = () => ({
  list: [],
  currentPage: null,
  quantityPages: null,
})

export const getters = {
  getList: s => s.list,
  getCurrentPage: s => s.currentPage,
  getQuantityPages: s => s.quantityPages,
}

export const mutations = {
  setList: (s, p) => (s.list = p),
  setCurrentPage: (s, p) => (s.currentPage = p),
  setQuantityPages: (s, p) => (s.quantityPages = p),
}

export const actions = {
  loadList({ commit }, page ) {
    const token = this.$cookies.get('token')
    axios({
      url: process.env.apiUrl + 'companies',
      method: 'GET',
      headers: {
        'X-Authorization': token,
      },
      params: {
        page,
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
      .catch(() => { })
  }
}
