export class AuthService {
    isLoggedin: boolean;
    constructor() {
        this.isLoggedin = false;
    }
    isActivated() {
        const promise = new Promise<boolean>(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.isLoggedin);
                }
                , 10);
            }
        );
        return promise;
    }
    login() {
        return this.isLoggedin = true;
    }
    logout() {
        return this.isLoggedin = false;
    }
}
