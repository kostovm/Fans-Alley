import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient){}

  login(email: string, password:string){
    const {apiUrl} = environment;

    this.http
  .post<UserForAuth>(`${apiUrl}/users/login`, { email, password })
  .subscribe(
    (response) => {
      if(response?.accessToken){
        localStorage.setItem('accessToken', response.accessToken)
      }
    },
    (error) => console.error('Error:', error)
  );
  }

  getProfile(){
    
  }

}