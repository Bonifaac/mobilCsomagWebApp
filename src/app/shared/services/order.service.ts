import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Orders} from "../models/Orders"


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  collectionName = 'Orders';

  constructor(private afs: AngularFirestore) { }

  creat(order: Orders){
    order.id = this.afs.createId();
    return this.afs.collection<Orders>(this.collectionName).doc(order.id).set(order);
  }

  getAll(){
    return this.afs.collection<Orders>(this.collectionName).valueChanges();
  }

  getByUserId(){
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;

    return this.afs.collection<Orders>(this.collectionName, ref => ref.where('userId', "==", user.uid)).valueChanges();

  }

  update(order: Orders) {
   return this.afs.collection<Orders>(this.collectionName).doc(order.id).set(order);
  }

  delete(id: string) {
    return this.afs.collection<Orders>(this.collectionName).doc(id).delete();
  }
}
