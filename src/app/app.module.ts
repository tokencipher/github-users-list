import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { DeleteUserConfirmationDialogComponent } from './users/delete-user-confirmation-dialog/delete-user-confirmation-dialog.component';
import { EditUsernameDialogComponent } from './users/edit-username-dialog/edit-username-dialog.component';
import { AddUserDialogComponent } from './users/add-user-dialog/add-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UsersListComponent,
    DeleteUserConfirmationDialogComponent,
    EditUsernameDialogComponent,
    AddUserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteUserConfirmationDialogComponent,
    EditUsernameDialogComponent
  ]  
})
export class AppModule { }
