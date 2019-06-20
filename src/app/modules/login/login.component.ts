import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthPayload } from '../../core/interfaces/login.interface';
import { AuthService } from '../../core/services/auth.service';

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
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const loginPayload = this.createLoginPayload();
      this.authService.auth(loginPayload)
        .subscribe(
          token => {
            if (this.authService.setUserToken(token)) {
              this.authService.navigate();
            } else {
              /* Printar msg de erro! */
            }
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

  private createLoginPayload(): AuthPayload {
    return {
      ...this.loginForm.value
    };
  }
}
