import { Component, Input } from '@angular/core';
import { UserPayload } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user: UserPayload;
  isShowLink = false;

  constructor() { }

  toggleShowLink() {
    this.isShowLink = !this.isShowLink;
  }

}
