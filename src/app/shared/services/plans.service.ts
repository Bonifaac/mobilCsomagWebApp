import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Plans} from "../models/Plans";

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  collectionName = 'Plans';

  constructor(private afs: AngularFirestore) { }

  creat(plan: Plans){
    return this.afs.collection<Plans>(this.collectionName).doc(plan.id).set(plan);
  }

  getAll(){
    return this.afs.collection<Plans>(this.collectionName).valueChanges();
  }

  update(plan: Plans) {
    return this.afs.collection<Plans>(this.collectionName).doc(plan.id).set(plan);
  }

  delete(id: string) {
    return this.afs.collection<Plans>(this.collectionName).doc(id).delete();
  }

  getById(id: string){
    return this.afs.collection<Plans>(this.collectionName).doc(id).valueChanges();
  }

  getPlans(isMonthly: boolean){
    return this.afs.collection<Plans>(this.collectionName, ref => ref.where('isMonthly', '==', isMonthly)).valueChanges();
  }
}
