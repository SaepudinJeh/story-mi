import { defineStore } from 'pinia'

import authLogin from './auth/auth'

const stateForm = defineStore('state-form', {
  state: () => {
    return {
      data: {
        title: '',
        story: '',
        date: '',
        image: []
      }
    }
  }
})

export { stateForm, authLogin }