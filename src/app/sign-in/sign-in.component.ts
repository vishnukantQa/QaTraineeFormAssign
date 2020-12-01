import { UserDetailsService } from './../services/user-details.service';
import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ViewChild, ElementRef } from '@angular/core'



declare var FB: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {
  @ViewChild('loginRef', { static: false }) loginElement: ElementRef;

  auth2: any;
  signInForm: FormGroup;


  constructor(private userDetailsService: UserDetailsService,
    private router: Router,
    private zone: NgZone,
    private readonly fb: FormBuilder
  ) {
    this.signInForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  errorMessage: string;

  ngOnInit(): void {

    this.facebookInitialize();
    this.googleInitialize();

  }

  ngAfterViewInit() {

  }




  onSubmit() {
    if (this.signInForm.valid) {
      if (this.userDetailsService.match(this.signInForm.getRawValue())) {
        return null
      } else {
        this.errorMessage = "Username or password is wrong";
      }

    } else {
      this.errorMessage = 'correctly filled the above details';
    }
  }




  //google authentication
  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '1089348138596-k8qpiu5iar8gn8j54tt25ejqg61e44m6.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        console.log("prepare Login");
        this.prepareLogin();//1089348138596-k8qpiu5iar8gn8j54tt25ejqg61e44m6.apps.googleusercontent.com
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
    console.log("waiting for click")
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        this.zone.run(() => {
          console.log("click");
          console.log("thvhb hjvh hjvhjb ghvj", this.auth2.currentUser.get());
          let profile = googleUser.getBasicProfile();

          this.userDetailsService.googleLoginDetail(profile);
          this.userDetailsService.setauth2(this.auth2);
          this.router.navigateByUrl("/main");
        })

      }, (error) => {

        this.errorMessage = JSON.stringify(error, undefined, 2);
      });

  }

  //facebook authentication
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
      this.zone.run(() => {
        if (response.authResponse) {
          FB.api('/me?fields=first_name, last_name, picture, email', function (response) {
            console.log('Successful login for: ' + response.first_name);
            dataLogin.getFBLoginDetails(response);
            dataLogin.getFbVar(FB);
            
          });

        }
        else {

          this.errorMessage = "User Login Failed"
        }
      })
    }, {
      scope: 'email',
      return_scopes: true
    });

  }



}


