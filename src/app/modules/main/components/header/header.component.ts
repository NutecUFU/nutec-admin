import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getUserAuth } from 'src/app/common/utils/auth';
import { UserPayload } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSide = new EventEmitter();
  user: UserPayload;

  ngOnInit() {
    this.user = getUserAuth().user;
  }

  toggleSidebar() {
    this.toggleSide.emit('toggle');
  }

}
