import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForAuth, UserInfo } from '../types/user';
import { environment } from 'src/environments/environment.development';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient, private sharedService: SharedService, private router: Router, private snackBar: MatSnackBar){}

  isLoggedIn(): boolean{
    return !!localStorage.getItem('accessToken');
  }

  login(email: string, password:string): void{
    const {apiUrl} = environment;

    this.http
  .post<UserForAuth>(`${apiUrl}/users/login`, { email, password })
  .subscribe(
    (response) => {
      if(response?.accessToken){
        localStorage.setItem('accessToken', response.accessToken);
        this.sharedService.setUserInfo(response);
        this.router.navigate(['/products'])
      }
    },
    (error) => console.error('Error:', error)
  );
  }

  register(name: string, phoneNumber: string, email: string, username: string, about: string, password: string, imageUrl: string): void{
    const {apiUrl} = environment;


    this.http
    .post<UserInfo>(`${apiUrl}/users/register`, {name, phoneNumber, email, username, about, password, imageUrl})
    .subscribe(
      (response) => {
        this.login(email, password);
        this.router.navigate(['/products']);
      },
      (error) => {
        if (error.status === 409) {
          this.snackBar.open('A user with the same email already exists. Please use a different email.', 'Close', {
            duration: 5000, 
            panelClass: ['error-snackbar'],
          });
        } else {
          this.snackBar.open('An unexpected error occurred. Please try again later.', 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar'],
          });
        }
      }
    )
  }

  logout(): void{
    localStorage.removeItem('accessToken');
    this.sharedService.clearUserInfo();
    this.router.navigate(['/home']);
  }

}