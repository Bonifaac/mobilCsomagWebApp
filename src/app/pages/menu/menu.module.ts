import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatListModule,
    MatIconModule
  ]
})
export class MenuModule { }
