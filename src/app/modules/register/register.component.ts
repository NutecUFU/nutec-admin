import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forEach } from 'lodash';
import { HttpStatusCode } from 'src/app/common/enums/http-status-code.enum';
import { ToastrService } from 'src/app/common/services/toastr.service';
import { UserPayload } from 'src/app/core/interfaces/user.interface';

import { UserService } from '../../common/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSubmitted = false;
  registerForm: FormGroup;
  selectedFile: File;

  get formControl() { return this.registerForm.controls; }
  get profileControl() { return this.registerForm.controls.profile; }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      const formData = this.getData();
      this.userService.register(formData)
        .subscribe(this.registerSuccess, this.registerError);
    }
  }

  changeFile(file: File) {
    if (file) {
      this.selectedFile = file;
    } else {
      this.selectedFile = undefined;
    }
  }

  private registerSuccess = (data: UserPayload) => {
    this.toastrService.success('REGISTER.SUCCESS');
    this.isSubmitted = false;
    this.selectedFile = undefined;
    this.registerForm.reset();
  }

  private registerError = (err: HttpErrorResponse) => {
    if (err.status === HttpStatusCode.BAD_REQUEST) {
      forEach(err.error, (el) => this.toastrService.error(el[0]));
    }
  }

  private initializeForm() {
    this.registerForm = this.formBuilder.group({
      first_name: [null, [ Validators.required ]],
      last_name: [null, [ Validators.required ]],
      email: [null, [ Validators.required, Validators.email ]],
      password: [null, [ Validators.required ]],
      profile: this.formBuilder.group({
        photo: [null, [ Validators.required ]]
      })
    });
  }

  private getData(): FormData {
    const formData = new FormData();
    formData.set('email', this.registerForm.get('email').value);
    formData.set('password', this.registerForm.get('password').value);
    formData.set('first_name', this.registerForm.get('first_name').value);
    formData.set('last_name', this.registerForm.get('last_name').value);
    formData.set('is_active', 'false');
    formData.set('profile.photo', this.selectedFile);
    return formData;
  }

}
