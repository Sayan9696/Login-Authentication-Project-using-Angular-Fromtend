import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  successMessage: string = ""

  regForm!: FormGroup

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  register() {

    this.api.register(this.regForm.value).subscribe(res => {

    }, err => {
      console.log(err);
    })
    this.regForm.reset({
      'name': '',
      'username': '',
      'password': ''
    });
    this.successMessage = "Your Data Successfully Registered..."
    // console.log(this.regForm)
  }
}
