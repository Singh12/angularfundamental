import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerServiceService } from '../server-service.service';
import { Injectable } from '@angular/core';
interface Server {
    id: number;
    serverName: string;
    status: string;
}
@Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serverService: ServerServiceService, private route: ActivatedRoute) {}
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer(+route.params['id']);
}
}
