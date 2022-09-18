import { Toast } from "vant";
export default {
    namespaced: true,
    state: {
      data: [],
      loading: false
    },
    getters: {
        getLoading(state) {
          return state.loading;
        },
        getStories(state) {
          return state.data?.reverse();
        }
    },
    mutations: {
        setLoading(state) {
            state.loading = !state.loading
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
      async fetchStories({ commit, rootGetters }) {
        try {
            commit('setLoading')

            const getEnvURl = rootGetters['baseUrl/getBaseUrl'];

            const urlBase = `${getEnvURl}/v1/get/stories?user=saepudin`
    
            const response = await fetch(urlBase, {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            credentials: 'same-origin',
            method:'POST'
            })
    
            const result = await response.json()
    
            commit('setData', result.result)
  
        } catch (error) {
          console.log(error)
          Toast.fail('Ups!')
        } finally {
            commit('setLoading')
        }
      }
    }
}