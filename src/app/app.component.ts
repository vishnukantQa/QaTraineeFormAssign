import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formApp';
 

  openNav() {
    document.getElementById("mySidenav").style.width = "100px";
    document.getElementById("aside").style.width="100px";
    document.getElementById("aside").style.height="100vh";
    document.getElementById("btn").style.display="none";

   document.getElementById("section").style.width="80vw";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("aside").style.width="25px";
    document.getElementById("aside").style.height="0";
    document.getElementById("section").style.width="100%";
    document.getElementById("btn").style.display="flex";
  }
}
