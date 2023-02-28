import { Component } from '@angular/core';
import { Form, FormControl,FormGroup} from '@angular/forms';
import { UserService } from '../shared/user.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  displayMsg:string='';
  isAccountCreated: boolean=false;
  StudentArray:any[]=[];
  isResultLoaded=false;

  Name:string="";
  phone:string="";
  pass:string="";
  currentStudentID="";
  
constructor(private userservice:UserService,private http:HttpClient){
  this.getAllStudents();
}
 
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
    });
 }
 

 getAllStudents(){
  this.http.get("https://localhost:7068/api/Students").subscribe((
    resultData:any)=>
    {
      this.isResultLoaded=true;
   //   console.log(resultData);
      this.StudentArray=resultData;
      console.log(this.StudentArray);
    });
 }


 DeleteStudent(data:any){
  this.http.delete("https://localhost:7068/api/Students"+"/"+ data.id).subscribe((resultData:any)=>
  {
    console.log(resultData);
    alert("Student details Deleted");
    this.getAllStudents();  
  });
}


setCurrentData(data:any){
  this.http.get("https://localhost:7068/api/Students"+"/"+ data).subscribe((resultData:any)=>
  {
    console.log(resultData);
    this.Name=resultData.name;
  this.phone=resultData.phone;
  this.pass=resultData.pass;
  });
  console.log(data);
  this.currentStudentID=data;
//  console.log(this.currentStudentID);
  console.log(this.phone);
}




}
