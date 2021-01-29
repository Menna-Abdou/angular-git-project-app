import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  baseUrl = "https://mearn-stack-backend-test.herokuapp.com/";

  constructor(private httpClient:HttpClient ) { }

  register(user:User){
  return this.httpClient.post(`${this.baseUrl}user/register`,user)
  }

  login(user:User){
    return this.httpClient.post(`${this.baseUrl}user/login`,{email:user.email, password:user.password})
    }
   isAuthenticated():boolean{
     if(localStorage.getItem('token')){
      return true;
     }else{
       return false;
     }
   }
}
