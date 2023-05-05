import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeRoutingModule } from './subscribe-routing.module';
import { SubscribeComponent } from './subscribe.component';
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    SubscribeRoutingModule,
    MatCardModule,
    FlexModule,
    MatButtonModule
  ]
})
export class SubscribeModule { }
