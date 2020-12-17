import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PspaUpdateComponent } from './pspa-update.component';

describe('PspaUpdateComponent', () => {
  let component: PspaUpdateComponent;
  let fixture: ComponentFixture<PspaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PspaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PspaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
