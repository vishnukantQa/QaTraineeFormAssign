import { Router, RouterModule } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/Employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(public crudService: CrudService,private router:RouterModule) { }

  ngOnInit() {

    this.crudService.getAll().subscribe((data: Employee[])=>{
      console.log(data);
      console.log("above is the data");
      this.employees = data;
      console.log(data[1].id);
      console.log("above is the data");
      console.log(this.employees[1].id);
      
      
    })  
  }

}
