import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthServices } from '../auth/auth.service';
@Injectable()
export class AuthInterceptors implements HttpInterceptor {
    constructor(private authService: AuthServices) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log('Intercept', req);
       const clone = req.clone({params: req.params.set('auth', this.authService.getAuthToken())});
       console.log('Intercept Auth Pass', clone);
        return next.handle(clone);
    }
}
10-Jan-1958	50.00		Mother	
Hemwanti Devi	Sharda Bhawan qno 20 basawan path dalmianagar rohtas bihar	Mother	01-Jan-1966