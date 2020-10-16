import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { User } from 'firebase';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  constructor(public auth: AuthService) {

   }

logout(){
this.auth.logout();
}

}
