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
    create({ }, models) {
        axios({
            url: process.env.apiUrl + 'orders',
            method: 'POST',
            data: models,

        })
        .then(e => {
            console.log(e)
        })
        .catch(() => {})
    },
    loadList({ commit }) {
        const token = this.$cookies.get('token')
        axios({
            url: process.env.apiUrl + 'orders',
            method: 'GET',
            headers: {
                'X-Authorization': token,
            },
        })
        .then(e => {
            const list = e.data.data.items
            commit('setList', list)
        })
        .catch(() => {})
    }
}