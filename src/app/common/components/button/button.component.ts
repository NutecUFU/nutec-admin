import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() classes: string;
  @Input() disabled: boolean;
  @Input() type = 'button';
  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
