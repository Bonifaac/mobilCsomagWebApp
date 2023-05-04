import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';


@NgModule({
    declarations: [
        ContactComponent
    ],
    exports: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule
    ]
})
export class ContactModule { }
