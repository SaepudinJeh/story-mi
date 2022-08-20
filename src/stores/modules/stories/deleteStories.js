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

                console.log('payload', payload);

                const getEnvURl = rootGetters['baseUrl/getBaseUrl'];

                const urlBase = `${getEnvURl}/v1/delete`

                const getToken = JSON.parse(localStorage.getItem('access_token'))
        
                const response = await fetch(urlBase, {
                  headers: {
                    Authorization: `Bearer ${getToken}`,
                    'Content-Type': 'application/json'
                  },
                  mode: 'cors',
                  credentials: 'same-origin',
                  method:'POST',
                  body: JSON.stringify(payload)
                })

                const result = await response.json()
        
                console.log('success', result)
      
            } catch (error) {
              console.log(error)
              Toast.fail('Ups!')
            } finally {
                commit('setLoading')
            }
          }
    }
}