import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AdminCommonModule } from 'src/app/common/admin-common.module';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AdminCommonModule,
    TranslateModule.forChild()
  ]
})
export class LoginModule { }
