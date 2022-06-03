import jwt from "../../http/requests/auth/jwt"
import router from "../../router"
import axios from "../../http/axios";
import EventBus from "@/service/bus";

export default {
    login({commit}, payload) {
        return new Promise((resolve, reject) => {


            jwt.login(payload.email, payload.password, payload.guard)
                .then(response => {
                    let accessToken = response.data.access_token;
                    if (accessToken) {
                        commit("SET_BEARER", accessToken);
                        console.log(payload.guard);
                        if (payload.guard == '1001') {
                            localStorage.setItem("aAccessToken", accessToken);
                            localStorage.setItem("aUser", JSON.stringify(response.data.user));
                            router.push({name: 'admin.dashboard'}).catch(() => {});
                        } else {
                            localStorage.setItem("accessToken", accessToken);
                            localStorage.setItem("user", JSON.stringify(response.data.user));
                            router.push(router.currentRoute.query.to || '/').catch(() => {});
                        }
                    }
                    resolve(response);
                })
                .catch(error => {
                    reject(error)
                });
        });
    },


    userLogin({commit}, payload) {

        return new Promise((resolve, reject) => {


            jwt.login(payload.email, payload.password, payload.guard)
                .then(response => {
                    let accessToken = response.data.access_token;
                    let role = response.data.role;
                    if (accessToken) {
                            commit("SET_USER_TOKEN", accessToken);
                            commit("SET_ROLE", accessToken);

                            localStorage.setItem("userAccessToken", accessToken);
                            localStorage.setItem("User", JSON.stringify(response.data.user));
                            localStorage.setItem("UserRole", role);
                            // router.push(router.currentRoute.query.to || '/').catch(() => {});
                            if(role == 'owner'){
                                router.push(router.currentRoute.query.to || '/owner-dashboard').catch(() => {});
                            }

                            if(role == 'captain'){
                                router.push(router.currentRoute.query.to || '/captain-dashboard').catch(() => {});
                            }


                    }
                    resolve(response);
                })
                .catch(error => {
                    reject(error)
                });
        });
    },

    fetchAccessToken({commit}, payload) {
        return new Promise((resolve, reject) => {
            jwt.refreshToken(payload.guard)
                .then(response => {
                    let accessToken = null;
                    if (response) {
                        accessToken = response.data.access_token;
                        if (accessToken) {
                            commit("SET_BEARER", accessToken);
                            if (payload.guard == '1001') {
                                localStorage.setItem("aAccessToken", accessToken);
                            } else {
                                localStorage.setItem("accessToken", accessToken);
                            }
                        }
                    }
                    resolve(accessToken)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },

    setHeaderToken({commit}, token) {
        commit("SET_BEARER", token);
    },



    createOwner({ commit }, payload) {

        return new Promise((resolve, reject) => {
          axios.post("api/owner/signup", payload,{
            headers: {
              "Content-Type": "multipart/form-data"
            }
            })
            .then((response) => {
                let accessToken = response.data.access_token;
                let role = response.data.role;
                if (accessToken) {
                        commit("SET_USER_TOKEN", accessToken);
                        commit("SET_ROLE", accessToken);
                        localStorage.setItem("userAccessToken", accessToken);
                        localStorage.setItem("User", JSON.stringify(response.data.user));
                        localStorage.setItem("UserRole", role);
                        EventBus.$emit("changeRoute",role);

                        // router.push(router.currentRoute.query.to || '/user/dashboard').catch(() => {});

                }
                resolve(response);
            })
            .catch((error) => { reject(error) })
        })
    },
    createCaptain({ commit }, payload) {

        return new Promise((resolve, reject) => {
          axios.post("api/captain/signup", payload,{
            headers: {
              "Content-Type": "multipart/form-data"
            }
            })
            .then((response) => {
                let accessToken = response.data.access_token;
                let role = response.data.role;
                if (accessToken) {
                        commit("SET_USER_TOKEN", accessToken);
                        commit("SET_ROLE", accessToken);
                        localStorage.setItem("userAccessToken", accessToken);
                        localStorage.setItem("User", JSON.stringify(response.data.user));
                        localStorage.setItem("UserRole", role);

                        // router.push(router.currentRoute.query.to || '/user/dashboard').catch(() => {});

                }
                resolve(response);
            })
            .catch((error) => { reject(error) })
        })
    },


    logout({ commit }) {


        return new Promise((resolve, reject) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' +localStorage.getItem('userAccessToken');
          axios.post("api/logout")
            .then((response) => {
                commit('SET_USER_TOKEN', null)
                commit('SET_ROLE', null)

                localStorage.removeItem('userAccessToken');
                localStorage.removeItem('User');
                localStorage.removeItem('UserRole');
                router.push(router.currentRoute.query.to || '/').catch(() => {});
                resolve(response);

            })
            .catch((error) => { reject(error) })
        })
    },


    signupValidation({ commit },payload) {
        return new Promise((resolve, reject) => {
          axios.post("api/owner/signup-validation", payload)
            .then((response) => {
                console.log(response);

                resolve(response);

            })
            .catch((error) => { reject(error) })
        })
    },
    captainSignupValidation({ commit },payload) {
        return new Promise((resolve, reject) => {
          axios.post("api/captain/signup-validation", payload)
            .then((response) => {
                console.log(response);

                resolve(response);

            })
            .catch((error) => { reject(error) })
        })
    },


}
