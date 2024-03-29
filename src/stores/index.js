import { createStore } from 'vuex'

import login from './modules/auth/login'
import getStories from './modules/stories/getStories'
import createStories from './modules/stories/createStories'
import baseUrl from './modules/env'
import deleteStories from './modules/stories/deleteStories'
import updateStories from './modules/stories/updateStories'

const stores = createStore({
    modules: {
        login,
        getStories,
        createStories,
        baseUrl,
        deleteStories,
        updateStories
    }
})


export { stores }