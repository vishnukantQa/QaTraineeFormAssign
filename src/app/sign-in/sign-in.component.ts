import { UserDetailsService } from './../services/user-details.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ViewChild, ElementRef } from '@angular/core'



declare var FB: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;

  auth2: any;

  constructor(private userDetailsService: UserDetailsService,
    private router: Router) { }
  errorMessage: string;

  ngOnInit(): void {
    this.googleInitialize();
    this.facebookInitialize();

  }
  onSubmit(form: NgForm) {

    if (form && form.valid) {
      if (this.userDetailsService.match(form)) {
        return null
      } else {
        this.errorMessage = "Username or password is wrong";
      }

    } else {
      this.errorMessage = 'correctly filled the marked detail';
    }
  }



  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '1089348138596-k8qpiu5iar8gn8j54tt25ejqg61e44m6.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();

        this.userDetailsService.googleLoginDetail(profile);
      
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  facebookInitialize() {
    (window as any).fbAsyncInit = function () {
      this.FB.init({
        appId: '3302865356490325',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  facebookLogin() {
  
    let dataLogin = this.userDetailsService;


    FB.login((response) => {

      if (response.authResponse) {
        FB.api('/me?fields=first_name, last_name, picture, email', function (response) {
          console.log('Successful login for: ' + response.first_name);


          dataLogin.getFBLoginDetails(response);
          dataLogin.getFbVar(FB);


        });

      }
      else {
        console.log('User login failed');
      }
    }, {
      scope: 'email',
      return_scopes: true
    });

  }



}


