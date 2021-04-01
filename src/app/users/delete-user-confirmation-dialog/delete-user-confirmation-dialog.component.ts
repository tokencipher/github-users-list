import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-user-confirmation-dialog',
  templateUrl: './delete-user-confirmation-dialog.component.html',
  styleUrls: ['./delete-user-confirmation-dialog.component.css']
})
export class DeleteUserConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteUserConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {userID: number}
  ) { }

  onNoClick(): void {
    this.dialogRef.close(
      {
        deleteConfirmed: false,
        userID: null
      }
    );
  }

  onYesClick(): void {
    this.dialogRef.close(
      { 
        deleteConfirmed: true, 
        userID: this.data.userID
      }
    );
  }

}
