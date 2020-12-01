import { UserDetailsService } from './../services/user-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  profile:any;
  constructor(private userDetailsService: UserDetailsService,
    private router: Router,
    private readonly fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, this.ValidatorPhone]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      Dob:['',[Validators.required]]
    });
  }

  errorMessage: String;

  ngOnInit(): void {

  }


  ValidatorPhone(fc: FormControl) {
    const value = String(fc.value);
    if (value != null && value !== '') {
      console.log(value.length);
      let isValid = value.length == 10;
      if (isValid) {
        return null;
      } else {
        return { phoneError: 'number is not valid' }
      }
    } else {
      return null;
    }
  }




  onSubmit() {
    if (this.signUpForm.valid) {
      let data = this.signUpForm.getRawValue();
      this.profile=data;
      this.userDetailsService.setname(data.userName);
      this.userDetailsService.setemail(data.email);
      this.userDetailsService.setphone(data.phone);
      this.userDetailsService.setpassword(data.password);
      this.userDetailsService.signUp();

    } else {
      this.errorMessage = 'correctly filled the above details';
    }
  }

}
