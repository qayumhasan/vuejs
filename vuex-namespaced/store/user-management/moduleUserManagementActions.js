import axios from "../../http/axios"

export default {
    fetchUsers({commit}, payload) {
        commit("RESET_USERS")
        return new Promise((resolve, reject) => {
            axios.get(payload.url)
                .then((response) => {
                    commit("SET_USERS", response.data)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    fetchUser({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios.get(payload.url)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    updateUser({commit}, payload) {
        return new Promise((resolve, reject) => {
            let data = payload.data;
            let formData = new FormData();
            for (let key in data) {
                if (key === "errors") continue;
                if (Array.isArray(data[key])) {
                    for (let i = 0; i < data[key].length; i++) {
                        formData.append(key + '[]', data[key][i] ? data[key][i] : '');
                    }
                } else {
                    formData.append(key, data[key] !== undefined ? data[key] : '');
                }
            }
            formData.append('_method', 'PUT');
            axios.post(payload.url, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    deleteUser({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios.delete(payload.url)
                .then(response => {
                    commit("REMOVE_USER", payload.userId)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    deleteUsers({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios.delete(payload.url, {
                data: { users: payload.data }
            }).then(response => {
                commit("REMOVE_USERS", payload.data)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
}
