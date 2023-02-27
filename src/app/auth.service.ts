import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl ="https://localhost:7068/api/";
  constructor(private http:HttpClient) { }
  
  signUp(userObj:any){

  }

  login(loginObj:any){
    
  }

}
