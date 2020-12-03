import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PspComponent } from './psp.component';

describe('PspComponent', () => {
  let component: PspComponent;
  let fixture: ComponentFixture<PspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
