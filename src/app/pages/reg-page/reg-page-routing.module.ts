import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegPageComponent } from './reg-page.component';

const routes: Routes = [{ path: '', component: RegPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegPageRoutingModule { }
