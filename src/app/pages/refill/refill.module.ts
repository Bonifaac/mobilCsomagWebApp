import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefillRoutingModule } from './refill-routing.module';
import { RefillComponent } from './refill.component';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    RefillComponent
  ],
    imports: [
        CommonModule,
        RefillRoutingModule,
        FlexModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class RefillModule { }
