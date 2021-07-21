import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  failureMessage: string = "";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  login() {
    this.api.login(this.loginForm.value).subscribe(res => {
      this.api.authdetails = true
      this.router.navigate([`gallary/${res['id']}/${res['name']}`]);
    }, err => {
      console.log(err);
      this.failureMessage = "Login Failed";
    })
    this.loginForm.reset({
      'username': '',
      'password': ''
    });

  }
  // console.log(this.loginForm.value);


}

