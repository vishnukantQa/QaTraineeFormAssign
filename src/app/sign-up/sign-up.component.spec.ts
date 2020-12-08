import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component=new SignUpComponent(null,null,new FormBuilder)
  });

  
  it('should contain five form control',()=>{
    expect(component.signUpForm.contains('userName')).toBeTruthy();
    expect(component.signUpForm.contains('email')).toBeTruthy();
    expect(component.signUpForm.contains('password')).toBeTruthy();
    expect(component.signUpForm.contains('phone')).toBeTruthy();
    expect(component.signUpForm.contains('Dob')).toBeTruthy();
  })

  it('should make username required',()=>{
    let control= component.signUpForm.get('userName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  })

  it('should make password required',()=>{
    let control= component.signUpForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  })

  it('should make phone required',()=>{
    let control= component.signUpForm.get('phone');
    control.setValue(null);
    expect(control.valid).toBeFalsy();
  })

  it('should make Dob required',()=>{
    let control= component.signUpForm.get('Dob');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  })

  it('should make email required',()=>{
    let control= component.signUpForm.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  })

  

  it('should make length of username false for smaller than 5 char',()=>{
    let control= component.signUpForm.get('userName');
    control.setValue('pppp');
    expect(control.valid).toBeFalsy();
  })

  it(' should make length of password false for smaller than 5 char',()=>{
    let control= component.signUpForm.get('password');
    control.setValue('pppp');
    expect(control.valid).toBeFalsy();
  })

  it(' should make length of phone number false for smaller or greater than 10 digit',()=>{
    let control= component.signUpForm.get('phone');
    control.setValue(123456789);
    expect(control.valid).toBeFalsy();
  })

  it(' should make email false if pattern does not match',()=>{
    let control= component.signUpForm.get('email');
    control.setValue('somethnhb@');
    expect(control.valid).toBeFalsy();
  })

  it('should make min length of username true for greater than or equal to 5 char',()=>{
    let control= component.signUpForm.get('userName');
    control.setValue('ppppp');
    expect(control.valid).toBeTruthy();
  })

  it(' should make min length of password true for greater than or equal to 5 char',()=>{
    let control= component.signUpForm.get('password');
    control.setValue('ppppp');
    expect(control.valid).toBeTruthy();
  })

  it(' should make email to true for valid pattern',()=>{
    let control= component.signUpForm.get('email');
    control.setValue('h@gmail.com');
    expect(control.valid).toBeTruthy();
  })

  it(' should make phone to true for valid length',()=>{
    let control= component.signUpForm.get('phone');
    control.setValue(1234567890);
    expect(control.valid).toBeTruthy();
  })


  it('should be create', () => {
    expect(component).toBeTruthy();
  });
});
