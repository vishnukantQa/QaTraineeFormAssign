import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserDetailsService } from './../../services/user-details.service';
import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(() => {
    const userDetailsServiceStub = () => ({
      name: {},
      email: {},
      phone: {},
      imageUrl: {}
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ParentComponent],
      providers: [
        { provide: UserDetailsService, useFactory: userDetailsServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`phone has default value`, () => {
    expect(component.phone).toEqual(0);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'assignValue').and.callThrough();
      component.ngOnInit();
      expect(component.assignValue).toHaveBeenCalled();
    });
  });
});
