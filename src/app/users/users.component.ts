import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userCreationStatus = 'No User was created!';
  userName = '';
  userCreated = false;
  users = ['User', 'User 2']
  log = []

  ngOnInit(): void {
  }

  onCreateUser() {
    this.users.push(this.userName);
    this.userCreationStatus = 'User was created! Name is ' + this.userName;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
