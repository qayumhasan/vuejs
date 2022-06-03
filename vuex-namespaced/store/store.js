import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleAuth from './auth/moduleAuth.js'
import moduleOwner from './owner/moduleOnwer.js'
import moduleUserManagement from './user-management/moduleUserManagement';


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        auth: moduleAuth,
        owner:moduleOwner,
        userManagement: moduleUserManagement,
    },
    strict: process.env.NODE_ENV !== 'production'
})
