import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { PhoneValidatorDirective } from './phone-validator.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div appPhoneValidator>Default</div>
  `
})
class TestComponent {}

describe('PhoneValidatorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneValidatorDirective, TestComponent]
    });
    spyOn(PhoneValidatorDirective.prototype, 'phoneValidator');
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(PhoneValidatorDirective)
    );
    bareElement = fixture.debugElement.query(
      By.css(':not([appPhoneValidator])')
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
        PhoneValidatorDirective.prototype.phoneValidator
      ).toHaveBeenCalled();
    });
  });
});
