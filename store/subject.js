import axios from 'axios'

export const state = () => ({
  list: [],
  selectedSubject: null,
})

export const getters = {
  getList: s => s.list,
  getSelectedSubject: s => s.selectedSubject,
}

export const mutations = {
  setList: (s, p) => (s.list = p),
  setSelectedSubject: (s, p) => (s.selectedSubject = p),
}

export const actions = {
  loadList({commit}) {
    const token = this.$cookies.get('token')
    axios({
        url: process.env.apiUrl + 'subjects',
        method: 'GET',
        headers: {
          'X-Authorization': token,
        },
      })
      .then(e => {
        const 
          data = e.data.data,
          list = data.items
        commit('setList', list)
      })
      .catch(() => {})
  },
}
