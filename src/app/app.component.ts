import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from './services/user-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'formApp';
 
  constructor(private userDetailsService:UserDetailsService,
    private router:Router){};

 

  
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
   
    

    localStorage.setItem('name', form.value.name);
    

    this.router.navigate(['userInfo']);

  }
}
