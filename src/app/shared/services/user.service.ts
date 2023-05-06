import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Users} from "../models/Users";
import {Plans} from "../models/Plans";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(private afs: AngularFirestore) { }

  creat(user: Users){
    return this.afs.collection<Users>(this.collectionName).doc(user.id).set(user);
  }

  getAll(){
    return this.afs.collection<Users>(this.collectionName).valueChanges();
  }

  update(user: Users) {
    return this.afs.collection<Users>(this.collectionName).doc(user.id).set(user);
  }

  delete(id: string) {
    return this.afs.collection<Users>(this.collectionName).doc(id).delete();
  }

  getById(id: string){
    return this.afs.collection<Users>(this.collectionName).doc(id).valueChanges();
  }

}
