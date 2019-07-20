import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';
import { UserPayload } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: UserPayload[];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.fetchAllUsers().subscribe(
      data => {
        this.users = data.results;
      }
    );
  }

}
