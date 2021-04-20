import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../users/user.service';

@Injectable()
export class UsernameValidator {

  debouncer: any;

  constructor(public userService: UserService) {}

  checkUsername(control: FormControl): any {
    clearTimeout(this.debouncer);

    return new Promise(resolve => {
      this.debouncer = setTimeout(() => {
        this.userService.checkUsername(control.value).subscribe((res) => {
          if (res === 'ok') {
            resolve(null);
          } else {
            if (res == 'ER_DUP_ENTRY') {
              resolve({'usernameInUse': true});
            }
          }
        })
      }, 1000)
    })
  }
}