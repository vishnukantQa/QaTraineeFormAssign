import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private _name:string = "";
  private _email:string = "";
  private _phone :number;
  private _Dob :Date;

  public get name() {
    return this._name;
  }
  public setname(value) {
    this._name = value;
  }

  public get email() {
    return this._email;
  }
  public setemail(value) {
    this._email = value;
  }
 
  public get phone() {
    return this._phone;
  }
  public setphone(value) {
    this._phone = value;
  }
  
  public get Dob() {
    return this._Dob;
  }
  public setDob(value) {
    this._Dob = value;
  }
 
  
  
  constructor() {
    
   }

  

}
