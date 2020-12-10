import { AppUser } from './models/app-user';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }
  save(user: firebase.User){
    console.log(user)
    this.db.object('/users/' + user.uid).update({
name: user.displayName,
email: user.email
    });
  }
  get(uid: string): AngularFireObject<AppUser>
  {
    return this.db.object('/users/' + uid);
  }

}
