import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CreateComponent } from './create.component';
import { empty, from, Observable } from 'rxjs';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let service: CrudService;
  let route:RouterTestingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      imports:[ReactiveFormsModule,HttpClientTestingModule,RouterModule],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
     service=new CrudService(null,null);
     component=new CreateComponent(service,null,new FormBuilder());
    
  });

  it('should check user name is invalid or not',()=>{
    let name=component.productForm.controls['name'];
    expect(name.valid).toBeFalsy();
    expect(name.errors['required']).toBeTruthy();
    name.setValue('abc');
    expect(name.valid).toBeTruthy();
  })

  it('should check user salary is invalid or not',()=>{
    let salary=component.productForm.controls['salary'];
    expect(salary.valid).toBeFalsy();
    expect(salary.errors['required']).toBeTruthy();
    salary.setValue('500');
    expect(salary.valid).toBeTruthy();
  })

  it('should check user age is invalid or not',()=>{
    let age=component.productForm.controls['age'];
    expect(age.valid).toBeFalsy();
    expect(age.errors['required']).toBeTruthy();
    age.setValue('50');
    expect(age.valid).toBeTruthy();
  })
  it('on submit service and check for the validation should be created', () => {

    let getValue={
      value:{
      employee_name:"jaf",
      employee_salary:"inf",
      employee_age:5,
      }
    }

    expect(component.productForm.valid).toBeFalsy();

    component.productForm.controls['name'].setValue('abc');
    component.productForm.controls['salary'].setValue('500');
    component.productForm.controls['age'].setValue('50');

    spyOn(service,'create').and.callFake((getValue)=>{
      return from([getValue]);
    })

    component.onSubmit();
    // fixture.detectChanges();
    expect(service.create).toHaveBeenCalled();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
