import { Toast } from "vant";
import { FetchData } from "../../../hooks";
import router from "../../../router";

const getTokenLocalStorage = localStorage.getItem('access_token'); 
const getIsLogin = localStorage.getItem('is_login');

export default {
    namespaced: true,
    state: {
        isAuth: (getIsLogin !== null || undefined) ? JSON.parse(getIsLogin) : false,
        loading: false,
        token: JSON.parse(getTokenLocalStorage)
    },
    getters: {
        getLoading(state) {
            return state.loading;
        },
        getIsAuth(state) {
            return state.isAuth;
        },
        getToken(state) {
            return state.token;
        }
    },
    mutations: {
        setIAuth(state) {
            state.isAuth = !state.isAuth
        },
        setLoading(state) {
            state.loading = !state.loading
        },
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
        async authLoginLocal({ commit, rootGetters }, payload) {
            try {
              console.log('Payload', payload)
    
                commit('setLoading')

                const baseURL = rootGetters['baseUrl/getBaseUrl'];

                const urlBase = `${baseURL}/v1/auth/login`;
    
                const response = await fetch(urlBase, {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })
    
                const isAuth = await response.json()
    
                console.log('response', isAuth)
    
                if(isAuth.statusCode === 200) {
                  commit('setIAuth')
    
                  Toast.success({
                    message: 'Login Berhasil',
                    icon: 'fire-o'
                  })
    
                  localStorage.setItem('access_token', JSON.stringify(isAuth.access_token));
                  localStorage.setItem('is_login', JSON.stringify(true))
    
                  router.push({ path: '/' })
                  
                } else {
                  Toast.fail({
                    message: 'Gagal Login!',
                    icon: "smile-o"
                  })
    
                  router.push({ path: '/login' })
                }
    
            } catch(err) {
                console.log('error', err)
                router.push({ path: '/' })
            } finally {
                commit('setLoading')
            }
        },
        async oauthLogin({ commit, rootGetters }, payload) {
          try {
            const baseURL = rootGetters['baseUrl/getBaseUrl'];
            const urlBase = `${baseURL}/oauth/login`;
    
            const result = await FetchData({ url: urlBase, payload });

            console.log(result)
          } catch (error) {
            console.log(result)
          }
        }
    }
}