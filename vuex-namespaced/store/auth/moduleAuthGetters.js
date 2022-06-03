export default {
    isUserLoggedIn: (guard) => {},

    isLoggedIn: (state) => state.userToken != null,
    userRole: (state)=>state.role,

}
