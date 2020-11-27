import { UserDetailsService } from './../services/user-details.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor(public userDetailService:UserDetailsService) { }

  ngOnInit(): void {
  }

   openNav() {
    document.getElementById("mySidenav").style.minWidth = "100px";
    //  document.getElementById("mySidenav").style.height= "100%";
    
    document.getElementById("main").style.marginLeft = "5px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("btn").style.display="none";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.minWidth = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("btn").style.display="inline";
  }

  
}
