import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  

  private _name:string = "";
  private _email:string = "";
  private _phone :number;
  private _password: string="";
  constructor(private router:Router) {
    
  }


  public get name() {
    if(this._name===""){
      return localStorage.getItem("name");
    }
    return this._name;
  }
  public setname(value) {
    localStorage.setItem("name",value)
    this._name = value;
  }

  public get email() {
    if(this._email==="" ){
      return localStorage.getItem("email");
    }
    return this._email;
  }
  public setemail(value) {
    localStorage.setItem("email",value)
    this._email = value;
  }
 
  public get phone() {
    if(this._phone==null || this._phone==0){
      this._phone=+localStorage.getItem("phone");
    }
    return this._phone;
  }
  public setphone(value) {
    localStorage.setItem("phone",value)
    this._phone = value;
  }

  public get password(): string {
    if(this._password=="" ){
      return localStorage.getItem("password");
    }
  
    return this._password;
  }
  public setpassword(value: string) {
    localStorage.setItem("password",value)
    this._password = value;
  }

  logout(){
    localStorage.removeItem("isUserLogin");
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("isUserSignUp");
    localStorage.removeItem("isLogin");
    this.router.navigateByUrl("/");
  }
  signUp(){
    localStorage.setItem("isUserSignUp","true");
    this.router.navigateByUrl("/");
  }
  
  match(form: NgForm) {
    // console.log(form.value.name);
    // console.log(form.value.password);
    // console.log(this.name);
    // console.log(this.password);
    let isUserSignUp=localStorage.getItem("isUserSignUp");
    if(form.value.name!==""){
    if(isUserSignUp==="true" && String(form.value.name).toLocaleUpperCase ===this.name.toLocaleUpperCase && String(form.value.password)===this.password){
      localStorage.setItem("isLogin","true");
      
      this.router.navigateByUrl("/main");
    }else{
      return false;
    }
  }else{
    return false;
  }
  }

  

}
