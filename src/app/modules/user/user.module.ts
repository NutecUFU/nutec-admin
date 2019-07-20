import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminCommonModule } from 'src/app/common/admin-common.module';

import { UserCardComponent } from './components/user-card/user-card.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent, UserCardComponent],
  imports: [
    CommonModule,
    AdminCommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
