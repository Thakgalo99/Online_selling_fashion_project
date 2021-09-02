import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../models/products';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  Products: Array<Products> = [];
  constructor(private _wish: WishlistService, private _router: Router) { }

  ngOnInit(): void {
    this.Products = this._wish.loadCartItems();
  }

  removeWishListItem(id: any) {
    for (var i = 0; i < this.Products.length; i++) {
      let item = this.Products[i];
      if (item._id == id) {
        this.Products.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("wishlist__", JSON.stringify(this.Products));

  }
}
