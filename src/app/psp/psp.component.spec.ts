import { CrudService } from './../services/crud.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PspComponent } from './psp.component';
import { from } from 'rxjs';

describe('PspComponent', () => {
  let component: PspComponent;
  let service:CrudService;
  
  let allEmployee=[{  
    id: 5,
    employee_name: "jhjb",
   employee_salary: 555,
   employee_age: 45,
   profile_image: "fcg"
  
}]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service=new CrudService(null,null);
    component=new PspComponent(service);
  });

  it('should assign value to allEmployee  by fetching the data from crud service', () => {
    spyOn(service,'getAll').and.callFake(()=>{
     return  from([allEmployee])
    })
    component.ngOnInit();
    expect(component.allEmployee).toBe(allEmployee);  
  });

  it('should assign value to  employee property by fetching the data from crud service', () => {
    spyOn(service,'getAll').and.callFake(()=>{
     return  from([allEmployee])
    })
    component.ngOnInit();
    expect(component.employees).toBe(allEmployee);
  });

  it('should assign value to  employee property by fetching the data from crud service', () => {
    spyOn(service,'getAll').and.callFake(()=>{
     return  from([allEmployee])
    })
    component.ngOnInit();
    expect(component.employees).toBe(allEmployee);
  });


});
