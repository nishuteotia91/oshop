import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  create(product){
    this.db.list('/products').push(product);
  }
  getAll()
  {
    return this.db.list('/products').valueChanges() as Observable<any[]>;
  }
  get(productId){
    
    return this.db.object('/products/' + productId);
    
  }
}
