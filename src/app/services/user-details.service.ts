import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private _auth2: any;

  private fb: any;
  private _name: string = "";
  private _email: string = "";
  private _phone: number;
  private _password: string = "";
  private _imageUrl: string = "";

  constructor(private router: Router, private httpClient: HttpClient,
    private zone: NgZone
  ) { }


  public get name() {
    if (this._name === "") {
      return localStorage.getItem("name");
    }
    return this._name;
  }
  public setname(value) {
    localStorage.setItem("name", value)
    this._name = value;
  }

  public get email() {
    if (this._email === "") {
      return localStorage.getItem("email");
    }
    return this._email;
  }
  public setemail(value) {
    localStorage.setItem("email", value)
    this._email = value;
  }

  public get phone() {
    if (this._phone == null || this._phone == 0) {
      this._phone = +localStorage.getItem("phone");
    }
    return this._phone;
  }
  public setphone(value) {
    localStorage.setItem("phone", value)
    this._phone = value;
  }

  public get password(): string {
    if (this._password == "") {
      return localStorage.getItem("password");
    }

    return this._password;
  }
  public setpassword(value: string) {
    localStorage.setItem("password", value)
    this._password = value;
  }

  public get imageUrl(): string {
    if (this._imageUrl === "") {
      return localStorage.getItem("imageUrl");
    }
    return this._imageUrl;
  }
  public setimageUrl(value: string) {
    localStorage.setItem("imageUrl", value);
    this._imageUrl = value;
  }


  public setauth2(value: any) {
    this._auth2 = value;
  }

  logout() {
    if (this.fb !== null && this.fb !== undefined) {
      this.fb.logout((response) => {
        alert("you are logout");
        this.zone.run(() => this.router.navigateByUrl("/"));
      });
      this.clearLocalStorage();
    }
    else if (this._auth2 !== null && this._auth2 !== undefined) {

      this._auth2.signOut().then(() => {
        console.log('User signed out.');
        this.zone.run(() => {
          this.router.navigateByUrl("/")
        }
        );
      });
      this.clearLocalStorage();
    }
    else {
      this.clearLocalStorage();
      this.router.navigateByUrl("/");
    }



  }

  clearLocalStorage() {
    localStorage.removeItem("isUserLogin");
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("isUserSignUp");
    localStorage.removeItem("imageUrl")
    localStorage.removeItem("isLogin");
  }

  signUp() {
    localStorage.setItem("isUserSignUp", "true");
    this.router.navigateByUrl("/");
  }

  match(data: any) {

    let isUserSignUp = localStorage.getItem("isUserSignUp");
    if (data.userName !== "") {
      if (isUserSignUp === "true" && String(data.userName).toLocaleUpperCase === this.name.toLocaleUpperCase && String(data.password) === this.password) {
        this.setLogin();

        this.router.navigateByUrl("/main");
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  googleLoginDetail(profile: any) {

    this.setname(profile.getName());
    this.setemail(profile.getEmail());
    this.setimageUrl(profile.getImageUrl());
    this.setLogin();

  }

  getFBLoginDetails(response: any) {

    this.setLogin();
    this.setname(response.first_name + response.last_name);
    this.setemail(response.email);
    this.setimageUrl(response.picture.data.url);

    this.router.navigateByUrl("/main");
  }
  getFbVar(fb: any) {
    this.fb = fb;
  }

  setLogin() {
    localStorage.setItem("isLogin", "true");
  }


}

