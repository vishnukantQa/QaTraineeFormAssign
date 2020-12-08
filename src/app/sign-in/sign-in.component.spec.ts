import { FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  
  

  

  beforeEach(() => {
    component=new SignInComponent(null,null,null,new FormBuilder)
  });

 

  it('should contain two form control',()=>{
    expect(component.signInForm.contains('userName')).toBeTruthy();
    expect(component.signInForm.contains('userName')).toBeTruthy();
  })

  it('should make username required',()=>{
    let control= component.signInForm.get('userName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  })

  it('should make min length of username false for smaller than 5 char',()=>{
    let control= component.signInForm.get('userName');
    control.setValue('pppp');
    expect(control.valid).toBeFalsy();
  })

  it('should make min length of username true for greater than or equal to 5 char',()=>{
    let control= component.signInForm.get('userName');
    control.setValue('ppppp');
    expect(control.valid).toBeTruthy();
  })

  it('should make password required',()=>{
    let control= component.signInForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  })

  it(' should make min length of password false for smaller than 5 char',()=>{
    let control= component.signInForm.get('password');
    control.setValue('pppp');
    expect(control.valid).toBeFalsy();
  })

  it(' should make min length of password true for greater than or equal to 5 char',()=>{
    let control= component.signInForm.get('password');
    control.setValue('ppppp');
    expect(control.valid).toBeTruthy();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
