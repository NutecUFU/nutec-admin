import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { FormLabelComponent } from './components/form/form-label/form-label.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CardComponent,
    FormInputComponent,
    FormLabelComponent,
    ButtonComponent,
    IconComponent
  ],
  exports: [
    CardComponent,
    FormInputComponent,
    FormLabelComponent,
    ButtonComponent,
    IconComponent
  ]
})
export class AdminCommonModule { }
