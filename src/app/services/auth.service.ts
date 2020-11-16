import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { };

  public isAuthenticated(): boolean {
    let jwtHelper: JwtHelperService = new JwtHelperService();
    console.log("i am run");
    const token = localStorage.getItem('token');
    console.log("no error");
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  //  return true;
  }
}
