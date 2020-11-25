import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidatorFn, Validators } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: PasswordValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validators {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = this.passwordValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
  passwordValidator(): ValidatorFn {
    return (control: FormControl) => {
      
      if (control.value != null && control.value !== '') {
        
        let isValid=String(control.value).length
        if (isValid >= 5) {
          return null;
        } else {
          return {
            passwordvalidator: { valid: false }
          };
        }
      } else {
        return null;
      }
    };
  }
}
