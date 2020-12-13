import { AngularFireDatabase } from '@angular/fire/database/';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) { }
  getCategories(){
    //console.log("db",this.db.list('/categories'))
    return this.db.list('/categories' , 
    ).valueChanges();  
  }

}
