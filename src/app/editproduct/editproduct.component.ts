import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../models/products';
import { AuthGuardService } from '../services/auth-guard.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  id: any;
  product: Products = new Products();
  constructor(private _prod_serv: ProductsService,private _route: ActivatedRoute,private __router: Router,private _httpClient: HttpClient,private _authGuard: AuthGuardService ) { }
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._prod_serv.getProduct(this.id).subscribe(result => {
      this.product = result;
    }, error => {
    });
  }
  ItemEdited() {
    this._httpClient.put('http://localhost:3000/products/' + this.id,this.product).subscribe(result => {
      alert('Successful');
      this.__router.navigate(['/products']);
    }, (error) => {
    });
  }
}
