import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/components/home/home.component';
import { SigninComponent } from './user/components/signin/signin.component';
import { SignupUserComponent } from './user/components/signup-user/signup-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './user/components/about/about.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './user/components/menu/menu.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './user/components/profile/profile.component';
import { CartComponent } from './user/components/cart/cart.component';
import { ViewMenuComponent } from './user/components/view-menu/view-menu.component';
import { OrdersComponent } from './user/components/orders/orders.component';
import { LoginComponent } from './admin/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupUserComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    ProfileComponent,
    CartComponent,
    ViewMenuComponent,
    OrdersComponent,
    LoginComponent,   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  // providers: [
  //   provideClientHydration()
  // ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
