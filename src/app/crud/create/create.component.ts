import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm: FormGroup;

  private subscription: SubscriptionLike;
  errorMessage: string;
  productCreated: boolean = false;
  constructor(private crudService: CrudService, private router: Router,
    private readonly fb: FormBuilder) {
    this.productForm = this.fb.group({

      userName: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      age: ['', [Validators.required]]

    });
  }

  ngOnInit(): void {

  }
  onSubmit() {

    if (this.productForm.valid) {

      this.subscription = this.crudService.create(this.productForm.getRawValue()).subscribe(res => {
        this.productCreated = true;
        console.log('Product created!')
        console.log(res);
        this.router.navigateByUrl('main/crud/home')
      });
    } else {
      this.errorMessage = 'correctly filled the above details';
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
