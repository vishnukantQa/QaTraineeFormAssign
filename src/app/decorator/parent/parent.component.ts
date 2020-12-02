import { UserDetailsService } from './../../services/user-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private userDetailsService:UserDetailsService) { }

  
    name:string="";
    email:string="";
    phone:number=0;
    dob:Date;
    imageUrl:string="";
  

  ngOnInit(): void {
    this.assignValue();
  }

  assignValue(){
    this.name=this.userDetailsService.name;
   
   
    this.email=this.userDetailsService.email;
    this.phone=this.userDetailsService.phone;
    this.imageUrl=this.userDetailsService.imageUrl;

  }


}
