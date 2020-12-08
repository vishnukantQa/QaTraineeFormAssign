import { PspaService } from './../services/pspa.service';
import { CrudService } from './../services/crud.service';
import { PspComponent } from './../psp/psp.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSPAComponent } from './pspa.component';

describe('PSPAComponent', () => {
  let component: PSPAComponent;
  let fixture: ComponentFixture<PSPAComponent>;
  let service:PspaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSPAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service=new PspaService(null)
    component=new PSPAComponent(service,null)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
