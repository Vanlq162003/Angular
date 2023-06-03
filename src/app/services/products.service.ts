import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {Observable} from 'rxjs'
import { IProduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {
    
  }

  getOneProduct(id:string|number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/`+id);
  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products/`)
  }
  removeProducts(id:string|number|undefined): Observable<IProduct[]> {
    return this.http.delete<IProduct[]>(`http://localhost:3000/products/`+id)
  }
  createProduct(product:IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`http://localhost:3000/products/`,product) 
  }
  updateProduct(product:IProduct , id: string|number): Observable<IProduct>{
    return this.http.patch<IProduct>(`http://localhost:3000/products/`+id,product) 
  }
}
