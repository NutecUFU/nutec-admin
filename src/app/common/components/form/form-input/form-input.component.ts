import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormInputComponent {

  @Input() label: string;
  @Input() placeHolder: string;
  @Input() typeInput: string;
  @Input() maskInput: string;
  @Input() isDisabled: boolean;
  @Input() name: string;
  @Input() isInvalid: boolean;
  @Input() formGroup: FormGroup;
  @Input() inputClasses: string;
  @Input() labelClasses: string;

  constructor() { }
}
