import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { itemmodel } from './../models/item.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  Product: itemmodel = new itemmodel();
  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  SaveNewProduct() {
    this._httpClient.post('http://localhost:3000/products', this.Product).subscribe(result => {
      this._router.navigate(['/products']);
    }, (error) => {
    })
  }
}
