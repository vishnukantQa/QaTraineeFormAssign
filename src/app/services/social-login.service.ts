import { Router } from '@angular/router';
import { UserDetailsService } from './user-details.service';
import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, NgZone } from '@angular/core';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})

export class SocialLoginService {
  private auth2:any;
  errorMessage: string;
  
  constructor(private zone: NgZone,
    private userDetailsService:UserDetailsService,
    private router:Router) { }

//    //google authentication
//    googleInitialize() {
//     window['googleSDKLoaded'] = () => {
//       window['gapi'].load('auth2', () => {
//         this.auth2 = window['gapi'].auth2.init({
//           client_id: '1089348138596-k8qpiu5iar8gn8j54tt25ejqg61e44m6.apps.googleusercontent.com',
//           cookie_policy: 'single_host_origin',
//           scope: 'profile email'
//         });
//          this.prepareLogin();//1089348138596-k8qpiu5iar8gn8j54tt25ejqg61e44m6.apps.googleusercontent.com
//       });
//     }
//     (function (d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) { return; }
//       js = d.createElement(s); js.id = id;
//       js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'google-jssdk'));
//   }
//   prepareLogin(loginElement:ElementRef) {
   
//     this.auth2.attachClickHandler(loginElement, {},
//       (googleUser) => {
//         this.zone.run(() => {
//           let profile = googleUser.getBasicProfile();

//           this.userDetailsService.googleLoginDetail(profile);
//           this.router.navigateByUrl("/main");
//         })

//       }, (error) => {
       
//         this.errorMessage=JSON.stringify(error,undefined,2);
//       });
//   }

//   //facebook authentication
//   facebookInitialize() {
//     (window as any).fbAsyncInit = function () {
//       this.FB.init({
//         appId: '3302865356490325',
//         cookie: true,
//         xfbml: true,
//         version: 'v3.1'
//       });
//       FB.AppEvents.logPageView();
//     };

//     (function (d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) { return; }
//       js = d.createElement(s); js.id = id;
//       js.src = "https://connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
//   }
 

//   facebookLogin() {
//     let dataLogin = this.userDetailsService;
//     FB.login((response) => {
//       this.zone.run(() => {
//         if (response.authResponse) {
//           FB.api('/me?fields=first_name, last_name, picture, email', function (response) {
//             console.log('Successful login for: ' + response.first_name);


//             dataLogin.getFBLoginDetails(response);
//             dataLogin.getFbVar(FB);



//           });

//         }
//         else {
        
//           this.errorMessage="User Login Failed"
//         }
//       })
//     }, {
//       scope: 'email',
//       return_scopes: true
//     });

//   }
// }
  }
