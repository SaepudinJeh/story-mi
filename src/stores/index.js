import { createStore } from 'vuex'

import login from './modules/auth/login'
import getStories from './modules/stories/getStories'
import createStories from './modules/stories/createStories'

const stores = createStore({
    modules: {
        login,
        getStories,
        createStories
    }
})


export { stores }