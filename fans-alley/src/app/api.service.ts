
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { NewProduct, Product } from './types/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:string = environment.apiUrl

  constructor(private http: HttpClient, private router: Router) { }

  addProduct(productName:string, description:string, category:string, buyPrice:number, sold:boolean, imageUrl:string){

    this.http.post<NewProduct>(`${this.apiUrl}/data/products`, {productName, description, category, buyPrice, sold, imageUrl})
    .subscribe(
      (response) => {
        this.router.navigate(['/products']);
      }, 
      (error) => console.log(error));
  }

  editProduct(product: Product, productId: string){
    console.log(product)
    this.http.put(`${this.apiUrl}/data/products/${productId}`, product).subscribe(
      (response) => {
        this.router.navigate([`/products/${productId}/details`])
      },
      (error) => console.log(error)
    );
  }

  getProducts(){
    return this.http.get(`${this.apiUrl}/data/products`);
  }

  getSingleProduct(productId: string){
    
    return this.http.get<Product>(`${this.apiUrl}/data/products/${productId}`);

  }

  deleteProduct(productId: string){
    return this.http.delete(`${this.apiUrl}/data/products/${productId}`).subscribe(
      (response) => {
        this.router.navigate(['/products']);
      },
      (error) => console.log(error)
    )
  }
}