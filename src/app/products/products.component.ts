import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './../services/auth-guard.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Products } from './../models/products';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  accessoryproducts: Products[] = [];
  cart__: Array<Products> = [];
  wish__: Array<Products> = [];
  constructor(private _router: Router, private _authGuard: AuthGuardService,private _httpClient: HttpClient,private _cart: CartService,private _wishlist: WishlistService) { }

  ngOnInit(): void {
    this._httpClient.get<Products[]>(`http://localhost:3000/products`).subscribe(result => {
      this.products = result;
    },(error) => {});
  }

  CheckIfAdministrator() {
    if (this._authGuard.Administrator() && this._authGuard.UserSession()) {
      return true;
    } else {
      return false;
    }
  }

  AddToCart(product: Products){
    this._cart.addToCart(product);
    alert('Product Added to cart');
  }

  AddToWish(product: Products){
    this._wishlist.addToCart(product);
    alert('Product Added to wishlist');
  }
}
