import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/services/auth.guard";


const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'regPage', loadChildren: () => import('./pages/reg-page/reg-page.module').then(m => m.RegPageModule) },
  { path: 'successReg', loadChildren: () => import('./pages/success-reg/success-reg.module').then(m => m.SuccessRegModule) },
  { path: 'subscribe', loadChildren: () => import('./pages/subscribe/subscribe.module').then(m => m.SubscribeModule) },
  { path: 'refill', loadChildren: () => import('./pages/refill/refill.module').then(m => m.RefillModule) },
  { path: 'orders', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
