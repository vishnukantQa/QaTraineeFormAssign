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
 
  subscription: SubscriptionLike;
  subscription2: SubscriptionLike;

  constructor(
    private route: ActivatedRoute, 
    private crudService: CrudService, 
    private routes: Router,
    private readonly fb: FormBuilder
    ) {
      this.updateForm = this.fb.group({
        
        id:['',[Validators.required]],
        name: ['', [Validators.required]],
        salary: ['', [Validators.required]],
        age: ['', [Validators.required]],
        profile:['',[Validators.required]]
  
      });
     }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.subscription = this.crudService.getById(this.id).subscribe((res: Employee) => {
        
        this.updateForm.patchValue({
          id: this.id,
          name: res.employee_name,
          salary:res.employee_salary,
          age:res.employee_age,
          profile:res.profile_image,
        });
      });

    });


  }


  onSubmit() {
    
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

