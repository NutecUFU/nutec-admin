import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminCommonModule } from 'src/app/common/admin-common.module';

import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found.routing';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AdminCommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
