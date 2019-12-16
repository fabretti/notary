import axios from "axios"

export const state = () => ({
    token: null,
    uuid: null,
})

export const getters = {
 token: s =>  s.token,
 isAuth: s => s.token !== null,
 uuid: s => s.uuid,
}

export const mutations = {
    setToken: (s,p) => s.token = p,
    setUuid: (s,p) => s.uuid = p,
}

export const actions = {
    login({ commit }, p) {
        return new Promise((resolve, reject) => {
            if (!p) {
                reject()
                return
            }
            axios({
                url: process.env.apiUrl + 'auth',
                method: "POST",
                data: {
                    login: p,
                }
            })
            .then(e => {
                const uuid = e.data.data.uuid
                commit('setUuid', uuid)
                resolve()
            })
            .catch(() => {
                reject()
            })
        })
    },
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios({
                url: process.env.apiUrl + 'auth',
                method: "DELETE",
                headers: {
                    'X-Authorization': state.token,
                },
            })
            .then(e => {
                commit('setToken', null)
                resolve()
            })
            .catch(() => {
                reject()
            })
        })
    },
    sendCode({ commit, state }, p) {
        return new Promise((resolve, reject) => {
            if (!p) {
                reject()
                return
            }
            axios({
                url: process.env.apiUrl + 'auth/code/' + state.uuid,
                method: "POST",
                data: {
                    code: p,
                }
            })
            .then(e => {
                const token = e.data.data.token
                commit('setToken', token)
                commit('setUuid', null)
                this.$cookies.set('token', token)
                resolve()
            })
            .catch(() => {
                reject()
            })
        })
    },

    loadToken({ commit }) {
        let token = this.$cookies.get('token')
        commit('setToken', token)
    }
}