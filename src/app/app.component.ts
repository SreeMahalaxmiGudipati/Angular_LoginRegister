import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMsgFromloginToprofile : any;
  fwdMsgToprofile($event: any) { this.currentMsgFromloginToprofile = $event; }
  
  title = 'Angular_LoginRegister';
}
