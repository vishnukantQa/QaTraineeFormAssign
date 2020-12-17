import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserDetailsService } from './../services/user-details.service';
import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(() => {
    const userDetailsServiceStub = () => ({
      name: {},
      email: {},
      phone: {},
      imageUrl: {}
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UserInfoComponent],
      imports:[ReactiveFormsModule],
      providers: [
        { provide: UserDetailsService, useFactory: userDetailsServiceStub }
      ]
    });
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
