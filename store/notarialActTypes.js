import axios from 'axios'

export const state = () => ({
    list: [],
})

export const getters = {
    getList: s => s.list,
}

export const mutations = {
    setList: (s, p) => s.list = p,
}

export const actions = {
    loadList({ commit }) {
        axios({
            url: process.env.apiUrl + 'notarialActTypes',
            method: 'GET',
        })
        .then(e => {
            const list = e.data.data.items
            commit('setList', list)
        })
        .catch(() => {})
    }
}