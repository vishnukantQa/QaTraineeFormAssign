import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input()  name: string="";
  @Input()  email: string="";
  @Input()  phone: number=0;
  @Input()  dob: Date;
  @Input()  imageUrl: string="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg";
  constructor() { }


  ngOnInit(): void {
  }

  

}
