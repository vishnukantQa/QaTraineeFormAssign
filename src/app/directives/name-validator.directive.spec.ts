import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { NameValidatorDirective } from './name-validator.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div appNameValidator>Default</div>
  `
})
class TestComponent {}

describe('NameValidatorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameValidatorDirective, TestComponent]
    });
    spyOn(NameValidatorDirective.prototype, 'nameValidator');
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(NameValidatorDirective)
    );
    bareElement = fixture.debugElement.query(
      By.css(':not([appNameValidator])')
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
      expect(NameValidatorDirective.prototype.nameValidator).toHaveBeenCalled();
    });
  });
});
