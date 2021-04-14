import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../user.service';

class User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}

class UserRegistrationFormValidators {
  static usernameShouldNotContainSpaces(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { shouldNotHaveSpaces: true }
    }

    return null;
  }
}

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
  userForm: FormGroup;
  newUser: User;
  users: User[];
  id: number;

  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    public userService: UserService
  ) { 
    this.userForm = new FormGroup({
      login: new FormControl('', [
        Validators.required, 
        UserRegistrationFormValidators.usernameShouldNotContainSpaces,
        Validators.pattern('[a-zA-Z0-9]')
        ]),
      node_id: new FormControl(''),
      avatar_url: new FormControl(''),
      gravatar_id: new FormControl(''),
      url: new FormControl(''),
      html_url: new FormControl(''),
      followers_url: new FormControl(''),
      following_url: new FormControl(''),
      gists_url: new FormControl(''),
      starred_url: new FormControl(''),
      subscriptions_url: new FormControl(''),
      organizations_url: new FormControl(''),
      repos_url: new FormControl(''),
      events_url: new FormControl(''),
      received_events_url: new FormControl(''),
      type: new FormControl(''),
      site_admin: new FormControl('')
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users)
  }

  cancel(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.id = this.users.length + 1;
    this.newUser = new User(this.userForm.value);
    this.newUser.id = this.id;
    this.dialogRef.close(this.newUser);
  }

}
