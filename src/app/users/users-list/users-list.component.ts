import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user';

import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteUserConfirmationDialogComponent } from '../delete-user-confirmation-dialog/delete-user-confirmation-dialog.component';
import { EditUsernameDialogComponent } from '../edit-username-dialog/edit-username-dialog.component';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';

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
      this.deleteUser(result.userID);
    });
  }

  deleteUser(userID: number): void {
    this.users = this.users.filter(user => user.user_id !== userID);
  }

  openEditUsernameDialog(user: User, index: number): void { 
    const dialogRef = this.dialog.open(EditUsernameDialogComponent, {
      width: '250px',
      height: '250px',
      data: {username: user.username}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.updatedUsername) {
        this.editUsername(user, result.updatedUsername, index);
      }
    })
  }

  editUsername(user: User, username: string, index: number): void {
    user.username = username;
    this.users[index] = user;
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '600px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if (result.newUser) {
        this.addUser(result.newUser);
      }
    
    });
  }

  addUser(user: User): void { this.users.push(user); }

}
