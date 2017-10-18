import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        base: 'http://localhost:3000/v1',
        data: false,
        cache: {}
    },
    mutations: {
        'SET_DATA': (state, payload) => {
            state.cache[payload.path] = payload.result
            state.data = payload.result
        }
    },
    actions: {
        'GET_DATA': async (context, payload) => {
            const result = await fetch(`${ context.state.base }${ payload.path }`).then(res => res.json())
            context.commit('SET_DATA', { result: result.data, path: payload.path })
        }
    }
})
