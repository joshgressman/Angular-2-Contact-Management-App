import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Business} from '../Business';
import {Category} from '../Category';

@Injectable()
export class FirebaseService{
  businesses: FirebaseListObservable<Business[]>;
  category: FirebaseListObservable<Category[]>;

  constructor(private _af: AngularFire){

  }

  getBusinesses(category:string = null){
    if(category != null){
      this.businesses = this._af.database.list('/businesses', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as
      FirebaseListObservable<Business[]>
    } else {
    this.businesses = this._af.database.list('/businesses') as
    FirebaseListObservable<Business[]>
  }
    return this.businesses;
  }

  getCategory(){
    this.category = this._af.database.list('/category') as
    FirebaseListObservable<Category[]>
    return this.category;
  }

  addBusiness(newBusiness){
     return this.businesses.push(newBusiness);
  }

}
