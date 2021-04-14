import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-username-dialog',
  templateUrl: './edit-username-dialog.component.html',
  styleUrls: ['./edit-username-dialog.component.css']
})
export class EditUsernameDialogComponent {
  // TODO: Define validator(s)
  username = new FormControl(this.data.username, [
    Validators.required, 
    Validators.pattern(/^[a-zA-Z0-9]/)
  ]);

  constructor(
    public dialogRef: MatDialogRef<EditUsernameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {username: string}
  ) { }

  onCancelClick(): void {
    this.dialogRef.close({updatedUsername: null});
  }

  saveUsername(): void {
    this.dialogRef.close({updatedUsername: this.username.value});
  }

}
