import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
      address:'Banglore'

    }
  ]

  constructor() { }

 public getUsers() {
    return this.users;
  }
 public getUserByName(name:any)
 {
  return this.users.find(users=>users.user===name);
 }


}
