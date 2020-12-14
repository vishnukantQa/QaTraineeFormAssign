import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { PasswordValidatorDirective } from './password-validator.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div appPasswordValidator>Default</div>
  `
})
class TestComponent {}

describe('PasswordValidatorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordValidatorDirective, TestComponent]
    });
    spyOn(PasswordValidatorDirective.prototype, 'passwordValidator');
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(PasswordValidatorDirective)
    );
    bareElement = fixture.debugElement.query(
      By.css(':not([appPasswordValidator])')
    );
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(
        PasswordValidatorDirective.prototype.passwordValidator
      ).toHaveBeenCalled();
    });
  });
});
