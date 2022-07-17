import { createStore } from 'vuex'

import login from './modules/auth/login'
import getStories from './modules/stories/getStories'
import createStories from './modules/stories/createStories'
import baseUrl from './modules/env'

const stores = createStore({
    modules: {
        login,
        getStories,
        createStories,
        baseUrl
    }
})


export { stores }