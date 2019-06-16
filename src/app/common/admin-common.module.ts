import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { FormLabelComponent } from './components/form/form-label/form-label.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CardComponent,
    FormInputComponent,
    FormLabelComponent,
    ButtonComponent
  ],
  exports: [
    CardComponent,
    FormInputComponent,
    FormLabelComponent,
    ButtonComponent
  ]
})
export class AdminCommonModule { }
