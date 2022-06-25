import { defineStore } from 'pinia'
import { Toast } from 'vant'

import router from '../../router'

const authLogin = defineStore('auth', {
  
  state: () => {
    const getTokenLocalStorage = localStorage.getItem('access_token'); 
    const getIsLogin = localStorage.getItem('is_login');

    return {
      isAuth: (getIsLogin !== null || undefined) ? JSON.parse(getIsLogin) : false,
      loading: false,
      token: getTokenLocalStorage
    }
  },
  actions: {
    async authLogin(payload) {
        try {
          console.log('Payload', payload)

            this.loading = true;

            const response = await fetch('http://localhost:3000/v1/auth/login', {
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
              this.isAuth = true;

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

              router.go(0)
            }

        } catch(err) {
            console.log('error', err)
        } finally {
            this.loading = false;
        }
    }
  }
})

export default authLogin;
