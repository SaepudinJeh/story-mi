import { defineStore } from 'pinia'

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

export { stateForm }