import { ActivatedRoute, Router } from '@angular/router';
import { UserprofileService } from '../userprofile.service';
import { Component, EventEmitter, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  @Input() usernamevalueFromlogin: any[] | undefined;
  users1:any;
 userlogin:any;
 


constructor(private userprofile:UserprofileService,private router:ActivatedRoute){}

ngOnInit():void{

 //this.userlogin=this.userprofile.getUserByName("ram");
 this.users1=this.userprofile.users;
}
}
