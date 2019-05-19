import { Component, OnInit} from '@angular/core';
import { ServerServiceService } from '../server-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-gard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {'id': number, 'serverName': string, 'status': string};
  serverName = '';
  serverStatus = '';
  allowAdded = false;
  id: number;
  changesSaved = false;
  constructor(private serviceServe: ServerServiceService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe(
      (param: Params) => {
        this.allowAdded = param.allowAdd === '1' ? true : false;
        if (this.allowAdded) {
          this.id = +this.route.snapshot.params['id'];
          this.server = this.serviceServe.getServer(this.id);
          this.serverName = this.server.serverName;
          this.serverStatus = this.server.status;
        }
      }
    );
   // console.log(this.serverName);
  }
  onUpdateServer() {
  // sconsole.log(this.serverStatus);
  this.serviceServe.updateServer({id: this.id, serverName: this.serverName, status: this.serverStatus});
  this.changesSaved = true;
  this.router.navigate(['../'], {relativeTo: this.route});
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowAdded) {
      return true;
    }
    if (this.serverName !== this.server.serverName || this.serverStatus !== this.server.status && !this.changesSaved) {
      return confirm('Do you want to Descard the changes?');
    } else {
      return true;
    }
  }
}
