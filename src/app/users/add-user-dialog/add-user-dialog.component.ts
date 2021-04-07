import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
  userForm = new FormGroup({
    login: new FormControl(''),
    id: new FormControl(''),
    node_id: new FormControl(''),
    gravatar_id: new FormControl(''),
    url: new FormControl(''),
    html_url: new FormControl(''),
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

  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
