import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription, observable, Observer } from 'rxjs';
import { Resolve } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
endResolver: Subscription;
  endResolver1: Subscription;
  constructor() { }

  ngOnInit() {
    const obserCheck = interval(1000);
    this.endResolver = obserCheck.subscribe(
      (num: number) => {
        console.log(num);
      }
    );
    const ownObserver = Observable.create(
      (observal: Observer<string>) => {
        setTimeout(() => {
          observal.next('First Observable'); // pass the next datapackage to observable
        }, 2000);
        setTimeout(() => {
          observal.next('Second Observable');
        }, 4000);
        setTimeout(() => {
          // observel.error('Error Observable');
          observal.error('Error Observable');
        }, 6000);
        setTimeout(() => {
          observal.next('after Error Observable');
        }, 7000);

      }
    );
    this.endResolver1 = ownObserver.subscribe(
      (name: string) => {
        console.log(name);
      },
      (error: string) => {
        console.log(error);
      }
    );
  }
  ngOnDestroy() {
    this.endResolver.unsubscribe();
    this.endResolver1.unsubscribe();
  }

}
