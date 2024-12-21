import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Offers } from './types/offers';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  apiUrl:string = environment.apiUrl

  constructor(private http: HttpClient) { }

  addOffer(currentOffer: number, userId: string, productId: string, username: string): void {
    const url = `${this.apiUrl}/jsonstore/offers`;
  
    this.http.get<{ [productId: string]: { [userId: string]: { username: string; offer: number } } } | null>(url).subscribe(
      (response) => {
        const allOffers = response || {};
  
        if (!allOffers[productId]) {
          allOffers[productId] = {};
        }
  
        allOffers[productId][userId] = {
          username: username,
          offer: currentOffer,
        };
  
        this.http.put(url, allOffers).subscribe(
          () => {},
          (error) => console.error('Error updating or creating offer:', error)
        );
      },
      (error) => console.error('Error fetching offers:', error)
    );
  }

  getOffersForProduct(productId: string){
    return this.http.get<Offers>(`${this.apiUrl}/jsonstore/offers/${productId}`)
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

  getBestOffers(productId: string): Observable<{ userId: string, offer: number }[] | null> {
    return this.getOffersForProduct(productId).pipe(
      map((response) => {
        if (response) {

          const offers = Object.entries(response);
  
          const maxOffer = Math.max(...offers.map(([userId, offer]) => offer.offer));
  
          const bestOffers = offers
            .filter(([userId, offer]) => offer.offer === maxOffer)
            .map(([userId, offer]) => ({ userId, offer: offer.offer }));
  
          return bestOffers.length > 0 ? bestOffers : null;
        }
        return null;
      })
    );
  }

  getUsersOffer(productId: string, userId: string) {
    return this.getOffersForProduct(productId).pipe(
      map((response) => {
        if (response && response.hasOwnProperty(userId)) {

          return response[userId].offer;
        }
        return null;
      })
    );
  }

  isUserWithBestOffer(productId: string, userId: string): Observable<boolean> {
    return this.getBestOffers(productId).pipe(
      map((bestOffers) => {
        if (bestOffers && bestOffers.length > 0) {

          const userBestOffer = bestOffers.find(offer => offer.userId === userId);
  
          if (userBestOffer) {

            if (bestOffers.length === 1) {
              return true;
            }

            return false;
          }
        }
        return false;
      })
    );
  }

}
