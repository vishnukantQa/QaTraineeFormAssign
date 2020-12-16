import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetailsService } from './../services/user-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  uploadImage: FormGroup;
  isUserSignUp:string=localStorage.getItem("isUserSignUp");

  name: string = "";
  email: string = "";
  phone: number;
  imageUrl: string;
  Dob: Date;

  constructor(public userDetailsService: UserDetailsService,
    readonly fb: FormBuilder) {
    this.name = userDetailsService.name;
    this.email = userDetailsService.email;
    this.phone = userDetailsService.phone;
    this.imageUrl = userDetailsService.imageUrl;
    this.uploadImage = this.fb.group({
      getImage: ['', [Validators.required]],
      fileSource: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }


  onFileChange(event) {

    if (event.target.files.length > 0) {
      const getImage = event.target.files[0];

      this.uploadImage.patchValue({
        fileSource: getImage
      });

    }
  }


  onSubmit() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      localStorage.setItem("imageUrl", String(reader.result));
      this.imageUrl = localStorage.getItem("imageUrl")

    })
    reader.readAsDataURL(this.uploadImage.get('fileSource').value)

  }

}
