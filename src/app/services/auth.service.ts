import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { };

  public isAuthenticated(): boolean {
    let jwtHelper: JwtHelperService = new JwtHelperService();
    
    const token = localStorage.getItem('isLogin');
    console.log(token);
    
    return  token==="true";
  //  return true;
  }
}
