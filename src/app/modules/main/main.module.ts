import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminCommonModule } from 'src/app/common/admin-common.module';

import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SideBarComponent,
    UserDropdownComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AdminCommonModule,
    NgbModule
  ]
})
export class MainModule { }
