import { Employee } from './../../common/Employee';
import { NgForm } from '@angular/forms';
import { CrudService } from './../../services/crud.service';
import { AppPage } from './../../../../e2e/src/app.po';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  name: string = "";
  salary: number;
  age: number;
  profile: string = "";
  subscription: SubscriptionLike;
  subscription2: SubscriptionLike;
  constructor(private route: ActivatedRoute, private crudService: CrudService, private routes: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("fvzgbz" + this.id);
      this.subscription = this.crudService.getById(this.id).subscribe((res: Employee) => {
        this.name = res.employee_name;
        this.age = res.employee_age;
        this.salary = res.employee_salary;
        this.profile = res.profile_image;
      });

    });


  }


  onSubmit(form: NgForm) {
    console.log(form);
    this.subscription2 = this.crudService.update(this.id, form.value).subscribe(res => {
      console.log("this is the response of cud" + res);
      this.routes.navigateByUrl("/main/crud");
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }

}

