import { Component, Input } from '@angular/core';

import { SIDEBAR_ITENS } from '../../constants/sidebar-itens';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  items = SIDEBAR_ITENS;

  @Input() isOpen: boolean;

}
