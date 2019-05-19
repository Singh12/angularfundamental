import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  @ViewChild('textField') textField: ElementRef;
  filterStatus: any;
  serverStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('test');
    }, 5000);
  });
testServer = new Promise(
    (resolve, reject) => {
      resolve('raj');
    }
  );
servers = [
  {
    instanceType: 'medium',
    name: 'Production',
    status: 'stable',
    started: new Date(15, 1, 2018)
  },
  {
    instanceType: 'large',
    name: 'Production Server',
    status: 'critical',
    started: new Date(15, 1, 2018)
  },
  {
    instanceType: 'small',
    name: 'Production Server',
    status: 'stable',
    started: new Date(15, 1, 2018)
  },
  {
    instanceType: 'extra small',
    name: 'Production Server',
    status: 'offline',
    started: new Date(15, 1, 2018)
  }
];
  constructor() {
  }
  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-succes': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  ngOnInit() {
    console.log(this.testServer);
    this.testServer.then(result => console.log(result));
  }
}
