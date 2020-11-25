import { NgForm } from '@angular/forms';
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

  private subscription: SubscriptionLike;
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {

    this.subscription = this.crudService.create(form.value).subscribe(res => {
      console.log('Product created!')
      console.log(res);
      this.router.navigateByUrl('main/crud/home')
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
