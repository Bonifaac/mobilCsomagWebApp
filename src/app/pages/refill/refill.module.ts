import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefillRoutingModule } from './refill-routing.module';
import { RefillComponent } from './refill.component';


@NgModule({
  declarations: [
    RefillComponent
  ],
  imports: [
    CommonModule,
    RefillRoutingModule
  ]
})
export class RefillModule { }
