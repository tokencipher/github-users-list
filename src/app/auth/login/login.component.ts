import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {}

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe((data: any) => {
      if (localStorage.getItem('access_token')) {
        console.log('Retrieving access token: ' + localStorage.getItem('access_token'));
        this.router.navigate(['/users-list']);
      }
    }, error => {
      if (error.status == 401) {
        window.alert('Invalid user credentials');
      }
    });
  }

}
