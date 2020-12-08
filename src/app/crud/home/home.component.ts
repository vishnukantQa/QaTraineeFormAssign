import { Router, RouterModule } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/Employee';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];
  subscription: SubscriptionLike
  constructor(public crudService: CrudService, private router: RouterModule) { }

  ngOnInit() {

    this.subscription = this.crudService.getAll().subscribe((data: Employee[]) => {
      
      this.employees = data;
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
