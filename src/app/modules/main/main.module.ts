import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminCommonModule } from 'src/app/common/admin-common.module';

import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AdminCommonModule
  ]
})
export class MainModule { }
