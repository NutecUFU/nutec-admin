import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AdminCommonModule } from 'src/app/common/admin-common.module';

import { UserService } from '../../common/services/user.service';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AdminCommonModule,
    TranslateModule.forChild(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class RegisterModule { }
