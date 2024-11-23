import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private menuVisibility = new BehaviorSubject<boolean>(false);
  menuVisibility$ = this.menuVisibility.asObservable();

  constructor() { }

  toggleMenuVisibility(): void {
    this.menuVisibility.next(!this.menuVisibility.value);
  }
}
