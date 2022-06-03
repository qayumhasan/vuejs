import state from './moduleOnwerState.js'
import mutations from './moduleOnwerMutations.js'
import actions from './moduleOnwerActions.js'
import getters from './moduleOnwerGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
