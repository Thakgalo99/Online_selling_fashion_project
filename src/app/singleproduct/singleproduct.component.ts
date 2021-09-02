import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { HttpClient } from '@angular/common/http';
import { Products } from './../models/products';


@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  id: any;
  product: Products = new Products();

  constructor(private prod__: ProductsService,
    private _route: ActivatedRoute,private __router: Router,private _httpClient: HttpClient,private _authGuard: AuthGuardService) { }

    ngOnInit(): void {
      this.id = this._route.snapshot.paramMap.get('id');
      this.prod__.getProduct(this.id).subscribe(result => {
        this.product = result;
      }, error => {
      });
    }

  deleteProduct() {
    this._httpClient.delete('http://localhost:3000/products/' + this.id).subscribe(result => {
      alert('Successful.');
      console.log(result);
      this.__router.navigate(['/products']);
    }, (error) => {
      console.log(error);
    });
  }

  CheckIfAdministrator() {
    if (this._authGuard.Administrator() && this._authGuard.UserSession()) {
      return true;
    } else {
      return false;
    }
  }

}
