import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  
  private fb:any;
  private _name:string = "";
  private _email:string = "";
  private _phone :number;
  private _password: string="";
  private _imageUrl: string="";
 
  constructor(private router:Router,private httpClient: HttpClient) {
    
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

  public get imageUrl(): string {
    if(this._imageUrl==="" ){
      return localStorage.getItem("imageUrl");
    }
    return this._imageUrl;
  }
  public setimageUrl(value: string) {
    localStorage.setItem("imageUrl",value);
    this._imageUrl = value;
  }

  logout(){
    if(this.fb!==null && this.fb!==undefined){
      this.fb.logout(function(response) {
        console.log("you are logout");
        // Person is now logged out
     })
    }
    localStorage.removeItem("isUserLogin");
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("isUserSignUp");
    localStorage.removeItem("imageUrl")
    localStorage.removeItem("isLogin");
    this.router.navigateByUrl("/");
  }
  signUp(){
    localStorage.setItem("isUserSignUp","true");
    this.router.navigateByUrl("/");
  }
  
  match(form: NgForm) {
   
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

  googleLoginDetail(profile:any){

    this.setname(profile.getName());
    this.setemail(profile.getEmail());
    this.setimageUrl(profile.getImageUrl());
    localStorage.setItem("isLogin","true");
    this.router.navigateByUrl("/main");
  }

  getFBLoginDetails(response:any){

    localStorage.setItem("isLogin","true");
    this.setname(response.first_name +response.last_name);
    this.setemail(response.email);
    this.setimageUrl(response.picture.data.url);
    
    this.router.navigateByUrl("/main");
  }
  getFbVar(fb:any){
    this.fb=fb;
  }

  

  

}
interface userFbInfo{
  
    first_name:String;
    last_name: String;
    profile_pic: String;
    locale: String;
    timezone: String;
    gender: String;
  
}
