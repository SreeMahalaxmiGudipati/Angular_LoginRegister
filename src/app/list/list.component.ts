import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  StudentArray:any[]=[];
  isResultLoaded=false;
  
constructor(private userservice:UserService,private http:HttpClient){
  this.getAllStudents();
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

}
