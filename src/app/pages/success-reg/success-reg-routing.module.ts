import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessRegComponent } from './success-reg.component';

const routes: Routes = [{ path: '', component: SuccessRegComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessRegRoutingModule { }
