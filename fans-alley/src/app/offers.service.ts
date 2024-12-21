import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  apiUrl:string = environment.apiUrl

  constructor(private http: HttpClient) { }

  getOffersForProduct(productId: string){
    return this.http.get(`${this.apiUrl}/jsonstore/offers/${productId}`)
  }

  getOffersCount(productId: string): Observable<number> {
    return this.getOffersForProduct(productId).pipe(
      map((response) => {
        if (response) {
          return Object.keys(response).length;
        }
        return 0;
      })
    );
  }

}
