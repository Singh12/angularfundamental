import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  appName = this.recipeService.getAppName();
servers = [
  {
    name: 'Testserver',
    capacity: 10,
    id: this.generateId()
},
  {
    name: 'Testserver',
    capacity: 10,
    id: this.generateId()
  }
];
  constructor(private recipeService: ServiceService) {
   }
  onAddServer(name: string) {
    this.servers.push(
      {
        name: name,
        capacity: 10,
        id: this.generateId()
      }
    );
  }
  ngOnInit() {
    // this.recipeService.getCustomers().subscribe(
    //   (item) => {
    //     item.forEach(element => {
    //       const y = element.payload.toJSON();
    //       y['$key'] = element.key;
    //       console.log(y);
    //     });
    //   }
    // );
  }
  generateId() {
    return Math.round(Math.random() * 10000);
  }
  onSave() {
    this.recipeService.storeServers(this.servers).
    subscribe(
      (success) => console.log(success),
      (error) => console.log(error)
    );
  }
  onGet() {
  this.recipeService.getServer().subscribe(
    (data: any[]) => {
      data.forEach(ele => {
        console.log(ele);
        ele.forEach(el => {
          this.servers.push(el);
        });
      }
      );
    },
    (error) => console.log(error)
  );
  }

  onclickget() {
   this.recipeService.getAppName().subscribe(
     (data) => console.log(data)
   );
  }
 }
