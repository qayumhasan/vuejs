import auth from "../../service/authService";

export default {
    isUserLoggedIn: (guard) => {
        return auth.isAuthenticated(guard);
    },
    user: (guard) => {
        return auth.user(guard);
    },

    userToken: localStorage.getItem("userAccessToken") || null,
    role: localStorage.getItem("UserRole") || null,
}
