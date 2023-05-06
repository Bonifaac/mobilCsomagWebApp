import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessorderRoutingModule } from './successorder-routing.module';
import { SuccessorderComponent } from './successorder.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    SuccessorderComponent
  ],
    imports: [
        CommonModule,
        SuccessorderRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule
    ]
})
export class SuccessorderModule { }
