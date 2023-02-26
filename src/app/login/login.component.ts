import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userprofile:UserprofileService,private router:Router){
  }
  
user:any
pass:any

login()
{
  // if(this.user=='admin'&& this.pass=='1234'){
  //   alert("Login success");
  //   this.router.navigate(['profile']);
  // }
  // else{
  //   alert("Login fail");
  // }
  const users = this.userprofile.getUsers();
  const user = users.find(u => u.user === this.user && u.pass === this.pass);
  if (user) {
    alert("Login success");
    this.router.navigate(['profile']);
   
  } else {
   alert("Invalid username and password");
  }

}
}

