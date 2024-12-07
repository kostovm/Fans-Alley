import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private menuVisibility = new BehaviorSubject<boolean>(false);
  menuVisibility$ = this.menuVisibility.asObservable();

  constructor(private router: Router) { 
    this.router.events.subscribe((event) =>{
      if (event instanceof NavigationEnd){
        this.closeSideMenuOnPageChange();
      }
    })
  }

  toggleMenuVisibility(): void {
    this.menuVisibility.next(!this.menuVisibility.value);
  }

  private closeSideMenuOnPageChange(): void {
    if (this.menuVisibility.value) {
      this.menuVisibility.next(false);
    }
  }
}
