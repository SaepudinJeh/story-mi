import { Toast } from "vant";
export default {
    namespaced: true,
    state: {
        data: {},
        loading: false
    },
    getters: {
        getLoading(state) {
            return state.loading;
        },
        getStories(state) {
            return state.data;
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
        async fetchStories({commit}) {
            try {
                commit('setLoading')
                

                // const urlBase = 'http://localhost:3000/v1/post/stories'
                const urlBase = 'https://story-wkwk-app.herokuapp.com/v1/get/stories?user=aliffah'
        
                const response = await fetch(urlBase, {
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                credentials: 'same-origin',
                method:'POST'
                })
        
                const result = await response.json()
        
                console.log('success', result)
        
                commit('setData', result.data)
      
            } catch (error) {
              console.log(error)
              Toast.fail('Ups!')
            } finally {
                commit('setLoading')
            }
          }
    }
}