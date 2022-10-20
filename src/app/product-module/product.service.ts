import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  // getproductdetailsById(id: number) {
  //   throw new Error('Method not implemented.');
  // }
  private baseURL="http://localhost:8080/product/products"
  constructor(private httpClient:HttpClient) { }
  getproductdetails(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }
  createProduct(product:Product):Observable<Object>{
    return this.httpClient.post( `${this.baseURL}`,product);
  }
  getProductDetailsById(id:number):Observable<Product>{
    return this.httpClient.get<Product>( `${this.baseURL}`);
  }
  updateProduct(id:number,product:Product):Observable<Product>{
    return this.httpClient.put<Product>(`${this.baseURL}/${id}`,product);
  }
  //delete is pending:
}
