import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){
  }
  
user:any
pass:any

login()
{
  if(this.user=='admin'&& this.pass=='1234'){
    alert("Login success");
    this.router.navigate(['profile']);
  }
  else{
    alert("Login fail");
  }
}
}

