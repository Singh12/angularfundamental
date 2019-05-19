import { Injectable } from '@angular/core';
import { HttpModule, Headers } from '@angular/http';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class ServiceService {

  constructor(private http: Http, private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;
  storeServers(server) {
   // console.log(server);
   // this.customerList = this.firebase.list('/data');
   // this.customerList.push(server);
   const header = new Headers({'content-type': 'application/json'});
    // return this.http.put('https://test-7b6af.firebaseio.com/data.json', server, { headers: header});
    return this.http.post('https://test-7b6af.firebaseio.com/data.json', server, { headers: header });
  }
  getCustomers() {
    this.customerList = this.firebase.list('/data');
    return this.customerList.snapshotChanges();
  }
  insertCustomer(server) {
    this.customerList.push(server);
  }
  getServer() {
    return this.http.get('https://test-7b6af.firebaseio.com/data.json')
      .pipe(map(
      (response: Response) => {
        const data = response.json();
        const arrayData = [];
        const test = Object.keys(data).map(i => {
          arrayData.push(data[i]);
        }
        );
        return arrayData;
      }
    )).pipe(catchError((err: Response) => {
      console.log(err);
      return Observable.throw(err);
    }
  ));
  }
  getAppName() {
    console.log('here2');
   return this.http.get('https://recipe-4fc9a.firebaseio.com/data.json')
    .pipe(map((response: Response) => {
      console.log(response.json());
      console.log('here3');
      return response.json();
    }));
  }
}
