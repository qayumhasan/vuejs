import EventEmitter from 'events'
class AuthService extends EventEmitter {
    isAuthenticated(guard) {
        let key = guard == '1001' ? 'aAccessToken' : 'userAccessToken';
        return localStorage.getItem(key);
    }

    user(guard) {
        const key = guard == '1001' ? 'aUser' : 'user';
        const user = localStorage.getItem(key);
        return user ? JSON.parse(user) : {};
    }

    isUserLoggedIn(){
        return localStorage.getItem('userAccessToken');
    }

    isOwner(){
        const role = localStorage.getItem('UserRole');
        const token = localStorage.getItem('userAccessToken');
        if(role == 'owner' && token){
            return true;
        }else{
            return false;
        }
    }

    isCaptain(){
        const role = localStorage.getItem('UserRole');
        const token = localStorage.getItem('userAccessToken');
        if(role == 'captain' && token){
            return true;
        }else{
            return false;
        }
    }

}
export default new AuthService();
