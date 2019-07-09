import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, SideBarComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
