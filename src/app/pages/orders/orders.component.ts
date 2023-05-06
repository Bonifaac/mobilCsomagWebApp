import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {Orders} from "../../shared/models/Orders";
import {OrderService} from "../../shared/services/order.service";
import {PlansService} from "../../shared/services/plans.service";
import {Plans} from "../../shared/models/Plans";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{

  orders: Array<Orders> = [];
  plans: Array<Plans> = [];

  constructor(private userS:UserService, private orderS: OrderService, private planS: PlansService) {
  }

  ngOnInit(): void {
    this.orderS.getByUserId().subscribe(orders =>{
      this.orders = orders;

      for(let i = 0; i < orders.length+1; i++){
        this.planS.getById(orders[i].planId).subscribe(plans =>{
          if (plans) {
            this.plans[i] = plans;
          }
        });
      }

    });
  }

}
