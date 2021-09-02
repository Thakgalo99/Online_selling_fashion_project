import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlist__:any[] = [];
  constructor() { }

  addToCart(addedItem:any) {
        this.wishlist__.push(addedItem);
        this.saveToLocalStorage() 
  }

  saveToLocalStorage() {
    localStorage.setItem('wishlist__', JSON.stringify(this.wishlist__));
  }

  loadCartItems() {
    this.wishlist__ = JSON.parse(localStorage.getItem('wishlist__') || '{}') ?? [];
    return this.wishlist__;
  }

  clearCartItems() {
    localStorage.removeItem('wishlist__');
    if (!localStorage.getItem('wishlist__')) {
      return true;
    }
    return false;
  }
}
