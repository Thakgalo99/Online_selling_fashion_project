import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { SingleuserComponent } from './singleuser/singleuser.component';
import { UsersComponent } from './users/users.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'logout',component:LogoutComponent},
  {path:'cart',component:CartComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'users',component:UsersComponent},
  {path:'products',component:ProductsComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'singleuser/:id',component:SingleuserComponent},
  {path:'singleproduct/:id',component:SingleproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
