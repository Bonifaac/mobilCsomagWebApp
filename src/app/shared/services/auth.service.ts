import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  auth: AngularFireAuth) { }

  login(email: string | null, password: string | null){
    return this.auth.signInWithEmailAndPassword(<string>email, <string>password);
  }

  signUp(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logOut(){
    return this.auth.signOut();
  }

  isUserLoggedIn(){
    return this.auth.user;
  }

}
