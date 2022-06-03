import axios from "../../../axios"
import store from "../../../../store/store.js"
import router from "../../../../router"

// Token Refresh
let isAlreadyFetchingAccessToken = false, isAlreadyAttempt = false
let subscribers = []

function onAccessTokenFetched(access_token) {
    subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber(callback) {
    subscribers.push(callback)
}

export default {
    init() {
        let guard = location.pathname.indexOf("/admin/") === 0 || location.pathname === "/admin" ? '1001' : ''
        let accessToken = store.state.auth.isUserLoggedIn(guard)
        if (accessToken) {
            store.dispatch("auth/setHeaderToken", accessToken)
        }
        axios.interceptors.response.use(function (response) {
            const {config} = response
            if (config.url !== "/api/refresh-token" && config.url !== "/api/admin/refresh-token") {
                isAlreadyAttempt = false
            }
            return response
        }, function (error) {
            // const { config, response: { status } } = error
            const {config, response} = error
            const originalRequest = config

            if (response) {
                if (response.status === 401) {
                    if (config.url === "/api/login" || config.url === "/api/admin/login") {
                        return Promise.reject(error)
                    }
                    if (isAlreadyAttempt
                        || config.url === "/api/refresh-token"
                        || config.url === "/api/admin/refresh-token"
                    ) {
                        isAlreadyFetchingAccessToken = false
                        isAlreadyAttempt = false
                        subscribers = []
                        if (guard == '1001') {
                            router.push({name: 'admin.logout'})
                        } else {
                            router.push({name: 'logout'})
                        }
                        return Promise.reject(error)
                    } else {
                        isAlreadyAttempt = true
                    }
                    if (!isAlreadyFetchingAccessToken) {
                        isAlreadyFetchingAccessToken = true
                        store.dispatch("auth/fetchAccessToken", {guard: guard})
                            .then(access_token => {
                                isAlreadyFetchingAccessToken = false
                                onAccessTokenFetched(access_token)
                            })
                    }

                    const retryOriginalRequest = new Promise((resolve) => {
                        addSubscriber(access_token => {
                            originalRequest.headers.Authorization = 'Bearer ' + access_token
                            resolve(axios(originalRequest))
                        })
                    })
                    return retryOriginalRequest
                } else if (response.status === 403) {
                    if (config.url === "/api/login" || config.url === "/api/admin/login") {
                        return Promise.reject(error);
                    }
                    if (config.url === "/api/refresh-token" || config.url === "/api/admin/refresh-token") {
                        if (guard == '1001') {
                            router.push({name: 'admin.logout'}).catch(() => {})
                        } else {
                            router.push({name: 'logout'}).catch(() => {})
                        }
                    } else if (guard == '1001') {
                        router.push({name: 'dashboard'}).catch(() => {})
                    } else {
                        router.push({name: 'admin.dashboard'}).catch(() => {})
                    }
                }
            }
            return Promise.reject(error)
        })
    },
    login(email, pwd, guard) {
        let url = "/api/login"
        if (guard == '1001') url = "/api/admin/login"
        return axios.post(url, {email: email, password: pwd,guard: guard})
    },
    refreshToken(guard) {
        let url = "/api/refresh-token"
        let key = "accessToken"
        if (guard == '1001') {
            url = "/api/admin/refresh-token"
            key = "aAccessToken"
        }
        return axios.post(url, {accessToken: localStorage.getItem(key)})
    }
}
