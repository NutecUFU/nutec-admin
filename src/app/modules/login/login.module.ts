import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminCommonModule } from 'src/app/common/admin-common.module';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AdminCommonModule
  ]
})
export class LoginModule { }
