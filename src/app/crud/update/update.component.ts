import { Employee } from './../../common/Employee';
import { NgForm } from '@angular/forms';
import { CrudService } from './../../services/crud.service';
import { AppPage } from './../../../../e2e/src/app.po';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 id="";
  name="";
  salary="";
  age="";
  profile="";
  constructor(private route:ActivatedRoute,private crudService:CrudService,private routes:Router) { }
  
  ngOnInit(): void {
    //  this.id= this.route.snapshot.paramMap.get('id')
     this.route.params.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log("fvzgbz" + this.id);
    this.crudService.getById(this.id).subscribe((res:Employee)=>{
      console.log(res);
      console.log("fvzgbzhgvhj");
      this.name=res.employee_name;
      this.age=res.employee_age;
      this.salary=res.employee_salary;
      this.profile=res.profile_image;
    });
      
   }); 
     

  }


  onSubmit(form:NgForm){
    console.log(form);
    this.crudService.update(this.id,form.value).subscribe(res=>{
      console.log("this is the response of cud" + res);
      this.routes.navigateByUrl("crud");
    })
  }

}

