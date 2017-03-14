import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {Business} from './Business';
import {Category} from './Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FirebaseService]
})
export class AppComponent implements OnInit {
  businesses:Business[];
  category: Category[];
  appState: string;
  activeKey: string;

  constructor(private _firebaseService:FirebaseService) {

  }
  ngOnInit(){
     this._firebaseService.getBusinesses().subscribe(businesses =>{
      this.businesses = businesses;
     });

     this._firebaseService.getCategory().subscribe(category =>{
       this.category = category;
     });
  }

 changeState(state, key){
   console.log('Changing state to: ' +state);
    if(key){
      console.log('Changing key to: '+key);
      this.activeKey = key;
    }
     this.appState = state;
 }

 filterCategory(category){
   this._firebaseService.getBusinesses(category).subscribe(businesses =>{
    this.businesses = businesses;
   });
 }

 addBusiness(company:string, cat:string, description:string, phone:string,email:string){
   var created_at = new Date().toString();

   var newBusiness = {
     company: company,
     category: cat,
     years_in_business:null,
     description: description,
     phone: phone,
     email: email,
     street_address: null,
     city: null,
     state: null,
     zipcode: null,
     created_at: created_at
   }

   console.log(newBusiness);
  this._firebaseService.addBusiness(newBusiness);

  this.changeState('default');
  }

}
