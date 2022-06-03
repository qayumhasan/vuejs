import axios from "../../http/axios"

export default {
    SET_BEARER(state, accessToken) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
    },
    SET_USER_TOKEN(state, accessToken) {
        state.userToken = accessToken
    },
    SET_ROLE(state, role) {
        state.role = role
    }
}
