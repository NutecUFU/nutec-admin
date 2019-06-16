import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-label',
  styleUrls: ['./form-label.component.scss'],
  template: `<label class="label">{{ label }}</label>`
})
export class FormLabelComponent {

  @Input() label: string;

  constructor() { }

}
