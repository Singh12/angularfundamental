import { Component, OnInit, ElementRef, Output, EventEmitter, OnChanges, AfterContentChecked } from '@angular/core';
import { ServerServiceService } from './server-service.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {} = [];

  showServer: boolean;
  constructor(private serverService: ServerServiceService, private elemRef: ElementRef) {
  }
  ngOnInit() {
    this.servers = this.serverService.getSetvers();
  }


}
