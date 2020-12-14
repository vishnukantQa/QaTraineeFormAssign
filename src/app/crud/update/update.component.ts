import { Employee } from './../../common/Employee';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm:FormGroup
  id: number;
  name: string = "";
  salary: number;
  age: number;
  profile: string = "";
  subscription: SubscriptionLike;
  subscription2: SubscriptionLike;

  constructor(
    private route: ActivatedRoute, 
    private crudService: CrudService, 
    private routes: Router,
    private readonly fb: FormBuilder
    ) {
      this.updateForm = this.fb.group({
        
        id:[this.id,[Validators.required]],
        name: [this.name, [Validators.required]],
        salary: [this.salary, [Validators.required]],
        age: [this.age, [Validators.required]],
        profile:[this.profile,[Validators.required]]
  
      });
     }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.subscription = this.crudService.getById(this.id).subscribe((res: Employee) => {
        this.name = res.employee_name;
        this.age = res.employee_age;
        this.salary = res.employee_salary;
        this.profile = res.profile_image;
      });

    });


  }


  onSubmit() {
    console.log(this.updateForm.getRawValue());
    this.subscription2 = this.crudService.update(this.id, this.updateForm.getRawValue()).subscribe(res => {
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

