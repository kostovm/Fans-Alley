
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { NewProduct } from './types/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }

  addProduct(productName:string, description:string, category:string, price:number, sold:boolean, imageUrl:string){
    const {apiUrl} = environment;

    this.http.post<NewProduct>(`${apiUrl}/data/products`, {productName, description, category, price, sold, imageUrl})
    .subscribe(
      (response) => {
        this.router.navigate(['/products']);
      }, 
      (error) => console.log(error));
  }

  getProducts(){
    const {apiUrl} = environment;
    return this.http.get(`${apiUrl}/data/products`)
  }
}