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
    document.getElementById("aside").style.height="80vh";

   document.getElementById("section").style.width="80vw";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("aside").style.width="3vw";
    document.getElementById("aside").style.height="10vh"
    document.getElementById("section").style.width="100%";
  }
}
