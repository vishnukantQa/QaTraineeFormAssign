import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidatorFn, Validators } from '@angular/forms';

@Directive({
  selector: '[appPhoneValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: PhoneValidatorDirective,
      multi: true
    }
  ]
})
export class PhoneValidatorDirective implements Validators {

  validator: ValidatorFn;
  constructor() {
    this.validator = this.phoneValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  phoneValidator(): ValidatorFn {
    return (control: FormControl) => {
      console.log(control.value);
      if (control.value != null && control.value !== '') {
        let isValid = String(control.value).length;
        if (isValid===10) {
          return null;
        } else {
          return {
            phonevalidator: { valid: false }
          };
        }
      } else {
        return null;
      }
    };
  }
}
