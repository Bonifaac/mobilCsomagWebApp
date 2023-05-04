import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessRegRoutingModule } from './success-reg-routing.module';
import { SuccessRegComponent } from './success-reg.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SuccessRegComponent
  ],
  imports: [
    CommonModule,
    SuccessRegRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SuccessRegModule { }
