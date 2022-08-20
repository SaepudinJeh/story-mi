import { Toast } from "vant";
import router from "../../../router";

export default {
    namespaced: true,
    state: {
        loading: false,
        resultUploadImage: null
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
        setResultUploadImage(state, data) {
            state.resultUploadImage = data
        }
    },
    actions: {
        async uploadImage({ commit }, payload) {
            try {
                commit('setLoading')

                const urlCloudinary = `https://api.cloudinary.com/v1_1/${payload.cloud_name}/image/upload`;
        
                const data = new FormData()
                data.append('file', payload.file)
                data.append('upload_preset', payload.upload_preset)
                data.append('cloud_name', payload.cloud_name)
        
                const responseUploadImage = await fetch(urlCloudinary, {
                    method:'POST',
                    body: data
                })
        
                const resultUpload = await responseUploadImage.json()
        
                console.log(resultUpload);
        
                commit('setResultUploadImage', resultUpload)
      
            } catch (error) {
                console.log(error)
                Toast.fail('Ups!')
            } finally {
                commit('setLoading')
            }
          },

        async createStory({ commit, state, rootGetters }, payload) {
            try {
                commit('setLoading')

                const getEnvURl = rootGetters['baseUrl/getBaseUrl'];

                // const urlBase = 'http://localhost:3000/v1/post/stories'
                const urlBase = `${getEnvURl}/v1/post/stories`

                const getToken = JSON.parse(localStorage.getItem('access_token'))
        
                const responseCreateStory = await fetch(urlBase, {
                    headers: {
                        Authorization: `Bearer ${getToken}`,
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    credentials: 'same-origin',
                    method:'POST',
                    body: JSON.stringify({
                        ...payload, 
                        image: [
                        {
                            'public_id': state.resultUploadImage?.public_id || '',
                            'url': state.resultUploadImage?.secure_url || ''
                        },
                        ] 
                    })
                })
        
                const resultCreated = await responseCreateStory.json()
        
                console.log('success', resultCreated)
        
                Toast.success('Success!')

                router.push({ path: '/' })
            } catch (error) {
                console.log(error)
                Toast.fail('Ups!')
                router.push({ path: '/' })
            } finally {
                commit('setLoading')
            }
        }
    }
}