import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Plans} from "../../shared/models/Plans";
import {PlansService} from "../../shared/services/plans.service";
import {OrderService} from "../../shared/services/order.service";
import {Users} from "../../shared/models/Users";
import {Orders} from "../../shared/models/Orders";
import {Router, Routes} from "@angular/router";


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit{

  user?: Users;

  order?: Orders;

  plans: Array<Plans> = [];


  constructor(private plansS: PlansService,
              private orderS : OrderService,
              private router : Router
  ){}
  ngOnChanges(): void {

  }

  ngOnInit(): void {
    this.plansS.getPlans(true).subscribe(plans =>{
      this.plans = plans;
    });
  }

  sendOrder(planId: string){
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;

    this.order = {
      id: '',
      planId: planId,
      userId: user.uid
    }
    this.orderS.creat(this.order);
    this.router.navigateByUrl('successorder');
    console.log(this.order);
  }

  protected readonly localStorage = localStorage;
  protected readonly JSON = JSON;
}
