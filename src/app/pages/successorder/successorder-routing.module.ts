import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessorderComponent } from './successorder.component';

const routes: Routes = [{ path: '', component: SuccessorderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessorderRoutingModule { }
