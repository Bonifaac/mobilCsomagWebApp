import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegPageRoutingModule } from './reg-page-routing.module';
import { RegPageComponent } from './reg-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    RegPageComponent

  ],
  imports: [
    CommonModule,
    RegPageRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule
  ]
})
export class RegPageModule { }
