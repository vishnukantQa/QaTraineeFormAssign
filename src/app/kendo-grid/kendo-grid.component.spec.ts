import { from } from 'rxjs';
import { CustomerDataService } from './../services/customer-data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoGridComponent } from './kendo-grid.component';

describe('KendoGridComponent', () => {
  let component: KendoGridComponent;
  let fixture: ComponentFixture<KendoGridComponent>;
  let service:CustomerDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service=new CustomerDataService(null)
    component=new KendoGridComponent(service);
  });

  it('should assign the value to grid property after getting the data from customer data service', () => {
    let gridData=[{
    userId:5,
    id:"5",
    title:"ghvhb",
    body:"hgvhvh",
    }]
    spyOn(service,'getPostData').and.callFake(()=>{
      return from([gridData]);
    })

    component.ngOnInit();

    expect(component.gridData).toBe(gridData);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
