import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserForAuth } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private menuVisibility = new BehaviorSubject<boolean>(false);
  menuVisibility$ = this.menuVisibility.asObservable();

  private userInfo = new BehaviorSubject<UserForAuth | null>(null);
  userInfo$ = this.userInfo.asObservable();

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

  setUserInfo(user: UserForAuth): void {
    this.userInfo.next(user);
  }

  clearUserInfo(): void {
    this.userInfo.next(null);
  }
}
