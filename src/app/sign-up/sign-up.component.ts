import { UserDetailsService } from './../services/user-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userDetailsService: UserDetailsService,
    private router: Router) {
    // if (localStorage.getItem('isUserLogin') == "true") {
    //   this.router.navigate(['home']);
    // }
  }

  errorMessage: String;

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    if (form && form.valid) {
    this.userDetailsService.setname(form.value.name);
    this.userDetailsService.setemail(form.value.email);
    this.userDetailsService.setphone(form.value.phone);
    this.userDetailsService.setpassword(form.value.password)
    this.userDetailsService.signUp();
    } else {
      this.errorMessage = 'Please Fill the Marked Field Correctly';
    }
    

  }

}
