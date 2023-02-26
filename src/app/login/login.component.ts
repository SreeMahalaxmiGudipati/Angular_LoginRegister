
import { Router } from '@angular/router';
import { UserprofileService } from '../userprofile.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() msgToprofile = new EventEmitter<any>();

  constructor(private userprofile:UserprofileService,private router:Router){
  }
  
public username:any;
public pass:any;

login()
{
  // if(this.user=='admin'&& this.pass=='1234'){
  //   alert("Login success");
  //   this.router.navigate(['profile']);
  // }
  // else{
  //   alert("Login fail");
  // }
  this.msgToprofile.emit(this.username);
  const users = this.userprofile.getUsers();
  const user = users.find(u => u.user === this.username && u.pass === this.pass);
  if (user) {
    alert("Login success");
    this.router.navigate(['profile']);
   
  } else {
   alert("Invalid username and password");
  }

}
}

