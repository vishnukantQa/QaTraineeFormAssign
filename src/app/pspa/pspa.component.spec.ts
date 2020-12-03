import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSPAComponent } from './pspa.component';

describe('PSPAComponent', () => {
  let component: PSPAComponent;
  let fixture: ComponentFixture<PSPAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSPAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
