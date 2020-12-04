import { SubscriptionLike } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../common/Employee';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-psp',
  templateUrl: './psp.component.html',
  styleUrls: ['./psp.component.css']
})
export class PspComponent implements OnInit {
  subscription: SubscriptionLike;
  employees: Employee[];
  id: number;
  name: string;
  age: number;
  salary: number;
  message: string = '';
  allEmployee: Employee[];

  itemPerPage: number = 5;
  pageSizes = [5, 10, 15];
  currentPage: number = 1;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.subscription = this.crudService.getAll().subscribe((data: Employee[]) => {
      this.employees = data;
      this.allEmployee = data;
      
    }, error => {
      this.message = "Data is not Available please try after some time";
    })
  }

  searchById() {
    if (this.id == undefined || this.id == null || String(this.id) == "") {

      this.setData();
    } else {

      this.allEmployee = this.employees.filter(res => {
        return res.id.toString().match(this.id.toString());
      })
    }
  }

 

  searchByName() {
    if (this.name == "") {
      this.setData()
    } else {

      this.allEmployee = this.employees.filter(res => {
        return res.employee_name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }

  }

  searchByAge() {
    if (String(this.age) == "") {

      this.setData();

    } else {

      this.allEmployee = this.employees.filter(res => {

        return res.employee_age.toString().match(this.age.toString());
      })
    }
  }

  searchBySalary() {
    if (String(this.salary) == "") {

      this.setData();

    } else {

      this.allEmployee = this.employees.filter(res => {
        return res.employee_salary.toString().match(this.salary.toString());
      })
    }
  }

  private setData() {
    this.allEmployee = this.employees;
  }

  handlePageSizeChange(event) {
    this.itemPerPage = event.target.value;
    this.currentPage = 1;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
