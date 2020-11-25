import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidatorFn, Validators } from '@angular/forms';

@Directive({
  selector: '[appNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: NameValidatorDirective,
      multi: true
    }
  ]
})
export class NameValidatorDirective implements Validators {

  validator: ValidatorFn;
  constructor() {
    this.validator = this.nameValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
  nameValidator(): ValidatorFn {
    return (control: FormControl) => {
      if (control.value != null && control.value !== '') {
        // let isValid = localStorage.getItem("name");
        // console.log(isValid);
        // if (isValid===control.value) {
        //   return null;
        // } else {
        //   return {
        //     namevalidator: { valid: false }
        //   };
        // }
      } else {
        return null;
      }
    };
  }

}
