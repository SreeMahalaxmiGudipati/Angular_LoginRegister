import { Component } from '@angular/core';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  users:any;
constructor(private userprofile:UserprofileService){}

ngOnInit():void{
  this.users=this.userprofile.users;
}
}
