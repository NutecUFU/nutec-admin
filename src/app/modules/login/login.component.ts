import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { saveUserAuth } from 'src/app/common/utils/auth';

import { Login } from './interfaces/login.interface';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  get formControl() { return this.loginForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const loginPayload = this.createLoginPayload();
      this.loginService.login(loginPayload)
        .subscribe(
          token => {
            saveUserAuth(token);
            this.router.navigate(['']);
          },
          err => console.log(err)
        );
    }
  }

  private initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  private createLoginPayload(): Login {
    return {
      ...this.loginForm.value
    };
  }
}
