import { UserDetailsService } from './../services/user-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  name:string="";
  email:string="";
  phone:number;
  Dob:Date;
  constructor(public userDetailsService:UserDetailsService) {
    this.name=userDetailsService.name;
    this.email=userDetailsService.email;
    this.phone=userDetailsService.phone;
    this.Dob=userDetailsService.Dob;
   }

  ngOnInit(): void {
  }

  

}
