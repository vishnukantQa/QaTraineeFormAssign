import { Users } from './../common/Users';
import { PspaService } from './../services/pspa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-pspa-update',
  templateUrl: './pspa-update.component.html',
  styleUrls: ['./pspa-update.component.css']
})
export class PspaUpdateComponent implements OnInit {

  updateForm:FormGroup
  id: number;
 
  subscription: SubscriptionLike;
  subscription2: SubscriptionLike;

  constructor(
    private route: ActivatedRoute, 
    private routes: Router,
    private readonly fb: FormBuilder,
    private pspaService:PspaService
    ) {
      this.updateForm = this.fb.group({
        
        name: ['', [Validators.required]],
        email:['',[Validators.required]]
  
      });
     }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.subscription = this.pspaService.getById(this.id).subscribe((res: Users) => {
        
        this.updateForm.patchValue({
          name: res.name,
          email:res.email,
        });
      });

    });


  }


  onSubmit() {
    console.log("buttonClick");
    
    this.subscription2 = this.pspaService.update(this.id, this.updateForm.getRawValue()).subscribe(res => {
      console.log( res);
      this.routes.navigateByUrl("/main/pspa");
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
