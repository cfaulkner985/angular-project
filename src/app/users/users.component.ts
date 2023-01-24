import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userCreationStatus = 'No User was created!';
  userName = '';

  ngOnInit(): void {
  }

  onCreateUser() {
    this.userCreationStatus = 'User was created! Name is ' + this.userName;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
