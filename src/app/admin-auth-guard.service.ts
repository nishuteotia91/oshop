import { getTestBed } from '@angular/core/testing';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';



@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService,private userService : UserService) {

  }

  canActivate(route, state: RouterStateSnapshot){
    return this.auth.user$.pipe(map(user=>{
      if(user) return true;
    

        
        return false;
    }));


  }
 
}
