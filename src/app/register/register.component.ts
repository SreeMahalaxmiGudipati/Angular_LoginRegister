import { Component } from '@angular/core';
import { Form, FormControl,FormGroup} from '@angular/forms';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  displayMsg:string='';
  isAccountCreated: boolean=false;
  
constructor(private userservice:UserService){}
 
public registerForm =new FormGroup({
  Name:new FormControl(''),
  Phone:new FormControl(),
  pass:new FormControl('')
});
  

registerSubmitted(){
    
  this.userservice.registerUser([
    this.registerForm.value.Name,
    this.registerForm.value.Phone,
    this.registerForm.value.pass
]).subscribe(res=>{
  if(res==''){
    this.displayMsg='Something wrong';
    console.log(res);
    this.isAccountCreated=true;
  }
  else {
   
    this.displayMsg='Account created successfully';
    console.log(res);
    this.isAccountCreated=false;
  }

    })
   
 }



 

}
