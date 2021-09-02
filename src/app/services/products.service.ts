import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Products } from './../models/products';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

getProduct(id: any): Observable<Products> {
    return this._http.get<Products>(`http://localhost:3000/products/${id}`);
}
}
