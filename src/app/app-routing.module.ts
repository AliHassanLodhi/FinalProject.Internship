import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './user/components/signin/signin.component'; 
import { HomeComponent } from './user/components/home/home.component';
import { SignupUserComponent } from './user/components/signup-user/signup-user.component';
import { AboutComponent } from './user/components/about/about.component';
import { MenuComponent } from './user/components/menu/menu.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { CartComponent } from './user/components/cart/cart.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { OrdersComponent } from './user/components/orders/orders.component';
import { AuthGuard } from './user/services/auth-service/auth.service.spec';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } ,

  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
