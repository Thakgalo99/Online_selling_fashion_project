import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  Products: Array<Products> = [];
  constructor(private _cart: CartService, private _router: Router) { }

  ngOnInit(): void {
    this.Products = this._cart.loadCartItems();
    var count = 0;
    for(var i = 0; i < this.Products.length; i++){
            count++;
    }
    localStorage.setItem('TotalItems', JSON.stringify(count));
  }

  removeCartItem(id: any) {
    for (var i = 0; i < this.Products.length; i++) {
      let item = this.Products[i];
      if (item._id == id) {
        this.Products.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart__", JSON.stringify(this.Products));
  }
}
