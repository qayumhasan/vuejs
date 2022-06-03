import jwt from "../../http/requests/auth/jwt"
import router from "../../router"
import axios from "../../http/axios";

export default {

    getOwnerBids({ commit }, payload) {

        return new Promise((resolve, reject) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' +localStorage.getItem('userAccessToken');
          axios.get("/api/owner-dashboard", payload)
            .then((response) => {
                commit("SET_OWNER_BIDS", response.data.bidList)
                commit("SET_OWNER_BIDS_COUNTS", response.data.bidCount)
                commit("SET_OWNER_USERS", response.data.user)
                resolve(response);
            })
            .catch((error) => { reject(error) })
        })
    },

}
