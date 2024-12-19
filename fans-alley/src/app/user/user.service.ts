import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { environment } from 'src/environments/environment.development';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient, private sharedService: SharedService, private router: Router){}

  isLoggedIn(): boolean{
    return !!localStorage.getItem('accessToken');
  }

  login(email: string, password:string){
    const {apiUrl} = environment;

    this.http
  .post<UserForAuth>(`${apiUrl}/users/login`, { email, password })
  .subscribe(
    (response) => {
      if(response?.accessToken){
        localStorage.setItem('accessToken', response.accessToken);
        this.sharedService.setUserInfo(response);
      }
    },
    (error) => console.error('Error:', error)
  );
  }

  logout(){
    localStorage.removeItem('accessToken');
    this.sharedService.clearUserInfo();
    this.router.navigate(['/home']);
  }

  getProfile(){
    
  }

}