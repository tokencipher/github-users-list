import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user';

import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteUserConfirmationDialogComponent } from '../delete-user-confirmation-dialog/delete-user-confirmation-dialog.component';
import { EditUsernameDialogComponent } from '../edit-username-dialog/edit-username-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];
  selected: number;

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users)
  }

  showAvatar(userID: number): void {
    this.selected = userID;
  }

  openDeleteUserDialog(userID: number): void {
    const dialogRef = this.dialog.open(DeleteUserConfirmationDialogComponent, {
      width: '250px',
      height: '250px',
      data: {userID: userID}
    });

    dialogRef.afterClosed().subscribe(result => {
      /*
      console.log('The dialog was closed');
      console.log('Value of deleteConfirmed: ', result.deleteConfirmed);
      console.log('Value of userID: ', result.userID);
      */
      this.deleteUser(result.userID);
    });
  }

  deleteUser(userID: number): void {
    this.users = this.users.filter(user => user.id !== userID);
    //console.log('Updated list of users after delete operation: ', this.users);
  }

  openEditUsernameDialog(user: User, index: number): void { 
    // TODO: Create algorithm for actions to take after closing this dialog
    // 1. Retrieve updated username if available/valid
    // 2. Call editUsername method with args -> user: User, userName: string, index: number
  }

  editUsername(user: User, userName: string, index: number): void {
    // TODO: Create algorithm for updating username
    // 1. Update `login` property of user object in users array to be updated
    // 2. Replace User object in users array accessed via saved index w/ updated User object
  }

}
