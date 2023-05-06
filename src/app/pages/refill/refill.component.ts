import {Component, OnChanges, OnInit} from '@angular/core';
import {PlansService} from "../../shared/services/plans.service";
import {Plans} from "../../shared/models/Plans";
import {Users} from "../../shared/models/Users";
import {Orders} from "../../shared/models/Orders";
import {OrderService} from "../../shared/services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-refill',
  templateUrl: './refill.component.html',
  styleUrls: ['./refill.component.scss']
})
export class RefillComponent implements OnChanges, OnInit{

  plans: Array<Plans> = [];
  user?: Users;

  order?: Orders;


  constructor(private plansS: PlansService,
              private orderS : OrderService,
              private router : Router
  ){}
  ngOnChanges(): void {

  }

  ngOnInit(): void {
    this.plansS.getPlans(false).subscribe(plans =>{
      this.plans = plans;
    });
  }

  sendOrder(planId: string) {
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
}
