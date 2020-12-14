import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { EmailValidatorDirective } from './email-validator.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div appEmailValidator>Default</div>
  `
})
class TestComponent {}

describe('EmailValidatorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailValidatorDirective, TestComponent]
    });
    spyOn(EmailValidatorDirective.prototype, 'emailValidator');
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(EmailValidatorDirective)
    );
    bareElement = fixture.debugElement.query(
      By.css(':not([appEmailValidator])')
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
        EmailValidatorDirective.prototype.emailValidator
      ).toHaveBeenCalled();
    });
  });
});
