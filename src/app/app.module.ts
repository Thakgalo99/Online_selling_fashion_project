import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SingleuserComponent } from './singleuser/singleuser.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RegisterComponent } from './register/register.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    LogoutComponent,
    ProductsComponent,
    UsersComponent,
    CartComponent,
    WishlistComponent,
    SingleuserComponent,
    SingleproductComponent,
    AdduserComponent,
    AddproductComponent,
    RegisterComponent,
    EditproductComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
