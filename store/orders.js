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
    async create({ }, models) {
        const token = this.$cookies.get('token')
        let e = await axios({
            url: process.env.apiUrl + 'orders',
            method: 'POST',
            data: models,
            headers: {
                'X-Authorization': token || null
            },

        })
        .catch(() => false)
        if (e === false) {
            return false
        }
        // TODO 
        return true
    },
    async delete({ }, id) {
        const token = this.$cookies.get('token')
        let e = await axios({
            url: process.env.apiUrl + 'orders/' + id,
            method: 'DELETE',
            headers: {
                'X-Authorization': token || null
            },

        })
        .catch(() => false)
        if (e === false) {
            return false
        }
        // TODO 
        return true
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