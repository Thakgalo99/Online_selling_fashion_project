import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  cart__:any[] = [];
  constructor() { }

  addToCart(addedItem:any) {
        this.cart__.push(addedItem);
        this.saveToLocalStorage() 
  }

  saveToLocalStorage() {
    localStorage.setItem('cart__', JSON.stringify(this.cart__));
  }

  loadCartItems() {
    this.cart__ = JSON.parse(localStorage.getItem('cart__') || '{}') ?? [];
    return this.cart__;
  }

  clearCartItems() {
    localStorage.removeItem('cart__');
    if (!localStorage.getItem('cart__')) {
      return true;
    }
    return false;
  }
}
