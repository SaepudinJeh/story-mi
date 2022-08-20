import { Toast } from "vant";
export default {
    namespaced: true,
    state: {
        loading: false
    },
    getters: {
        getLoading(state) {
            return state.loading;
        },
    },
    mutations: {
        setLoading(state) {
            state.loading = !state.loading
        },
    },
    actions: {
        async deleteStory({ commit, rootGetters }, payload) {
            try {
                commit('setLoading')

                const getEnvURl = rootGetters['baseUrl/getBaseUrl'];

                const urlBase = `${getEnvURl}/v1/delete`

                const getToken = JSON.parse(localStorage.getItem('access_token'))
        
                await fetch(urlBase, {
                  headers: {
                    Authorization: `Bearer ${getToken}`,
                    'Content-Type': 'application/json'
                  },
                  mode: 'cors',
                  credentials: 'same-origin',
                  method:'POST',
                  body: JSON.stringify(payload)
                })
      
            } catch (error) {
              console.log(error)
              Toast.fail('Ups!')
            } finally {
                commit('setLoading')
            }
          }
    }
}