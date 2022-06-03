export default {
    RESET_USERS(state) {
        state.users = [];
    },
    SET_USERS(state, users) {
        state.users = users
    },
    REMOVE_USER(state, userId) {
        const userIndex = state.users.findIndex(u => u.id == userId)
        state.users.splice(userIndex, 1)
    },
    REMOVE_USERS(state, users) {
        users.forEach(user => {
            const userIndex = state.users.findIndex(u => u.id == user)
            state.users.splice(userIndex, 1)
        });
    },
}
