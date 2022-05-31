import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-mu-user',
  templateUrl: './mu-user.component.html',
  styleUrls: ['./mu-user.component.css']
})
export class MuUserComponent implements OnInit {

  userForm: FormGroup;
  isSubmitting: boolean;
  savedData: { name: any; email: any; dateOfBirth: any; address: any; };
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(250)]],
      email: ["", [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });
  }

  

  async createUser() {
    
    if (this.userForm.valid) {
      this.isSubmitting = true;
      if (this.userForm.value){
        try {
          // call service to save data in the database
          this.savedData = {
            name: this.userForm.value.name,
            email: this.userForm.value.email,
            dateOfBirth: this.userForm.value.dateOfBirth,
            address: this.userForm.value.address,
          }
        } catch (e) {
          this.isSubmitting = false;
        }
      }
    }
  }


}





