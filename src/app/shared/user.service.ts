import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl ="https://localhost:7068/api/";
  constructor(private http:HttpClient) { }


  registerUser(user:Array<String>)
  {
    return this.http.post(this.baseUrl + 'Students' ,{
      Name:user[0],
      Phone:user[1],
      Password:user[2]
    },
    {
      responseType:'text',
    });
  }

  getStudentById(id:string){
    return this.http.get(this.baseUrl + 'Students/'+id);
  }
  
  
}
