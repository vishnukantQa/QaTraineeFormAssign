import { UserDetailsService } from './../services/user-details.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor(public userDetailService:UserDetailsService) { }

  isClicked:boolean=false;

  ngOnInit(): void {
  }

   openNav() {

    this.isClicked=true;

  }
  
   closeNav() {
     
     this.isClicked=false;
    
  }

  
}
