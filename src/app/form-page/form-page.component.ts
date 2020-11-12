import { Router, Routes } from '@angular/router';
import { UserDetailsService } from './../services/user-details.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  constructor(public userDetailsService:UserDetailsService,
    private router:Router) { 
    
    
  }

  ngOnInit(): void {
  }

  name :string ="";
  email :string ="";
  phone : number ;
  Dob : Date;
  
  onSubmit(form:NgForm){
    console.log(form.value.name);
    this.name=form.value.name;
    this.email=form.value.email;
    this.phone=form.value.phone;
    this.Dob=form.value.date;
    console.log(this.Dob);
    this.userDetailsService.setname(this.name);
    this.userDetailsService.setemail(this.email);
    this.userDetailsService.setphone(this.phone);
    this.userDetailsService.setDob(this.Dob);

    this.router.navigate(['userInfo']);

  }

}
