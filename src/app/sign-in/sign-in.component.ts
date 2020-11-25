import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userDetailsService: UserDetailsService,
    private router: Router) { }
    errorMessage: string;

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
     
    if (form && form.valid) {
      if(this.userDetailsService.match(form)){
        return null
      }else{
        this.errorMessage="Username or password is wrong";
      }
     
    } else {
      this.errorMessage = 'correctly filled the marked detail';
    }
  }


    // this.userDetailsService.setname(form.value.name);

    // this.userDetailsService.login();

  }


