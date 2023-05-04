import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefillComponent } from './refill.component';

const routes: Routes = [{ path: '', component: RefillComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefillRoutingModule { }
