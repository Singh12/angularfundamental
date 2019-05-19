import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthServices } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class RouteGardService implements CanActivate {
    constructor(private authService: AuthServices, private router: Router) {}
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.authService.isAuthenticated();
    }
}
