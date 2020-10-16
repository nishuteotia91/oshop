import { getTestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth,private route:ActivatedRoute) { 
    this.user$ = afAuth.authState;
  }
  login()
  {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout()
  {
    this.afAuth.signOut();
  }
}
