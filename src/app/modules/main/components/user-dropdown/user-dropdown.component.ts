import { Component, OnInit } from '@angular/core';
import { getUserAuth } from 'src/app/common/utils/auth';
import { UserPayload } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {

  user: UserPayload;

  constructor() { }

  ngOnInit() {
    this.user = getUserAuth();
  }

}
