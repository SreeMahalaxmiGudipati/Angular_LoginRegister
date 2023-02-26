import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  public users=[
    {
      id:1,
      user:'ram',
      pass:'1234',
      phone:'8976459767',
      address:'hyd'
    },
    {
      id:2,
      user:'laxman',
      pass:'1234',
      phone:'8976459767',
      address:'hyd'

    }
  ]

  constructor() { }

  getUsers() {
    return this.users;
  }


}
