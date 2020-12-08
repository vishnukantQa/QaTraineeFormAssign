import { CrudService } from './../../services/crud.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { from } from 'rxjs';




describe('HomeComponent', () => {
  let component: HomeComponent;
  let service:CrudService;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    service=new CrudService(null,null)
    component=new HomeComponent(service,null)
  });

  it('should set employees property by fetching the data from the service', () => {

    let employee=[{
      id: 5,
      employee_name: "abfj",
     employee_salary: 5,
     employee_age: 14,
     profile_image: "#",
    }]
    
    spyOn(service,'getAll').and.callFake(() => {

      return from([employee])
    })

    component.ngOnInit();

    expect(component.employees).toBe(employee)

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
