import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthServices {
    constructor(private router: Router) {}
    token: string;
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            responce => console.log(responce)
        )
            .catch(
                error => console.log(error)
            );
    }
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken().then(
                    (token: string) => {
                        this.token = token;
                    }
                );
            }
            ));
            console.log(this.token);
    }
    signOut() {
        firebase.auth().signOut().catch(
            (error) => console.log(error)
        );
        this.token = null;
    }

    getAuthToken() {
        firebase.auth().currentUser.getIdToken().then(
            (token: string) => {
                this.token = token;
            }
        );
        return this.token;
    }
    isAuthenticated() {
        return this.token != null;
    }
}
