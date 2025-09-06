import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApihhtpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    var updateHeaders = new HttpHeaders({
      'authorizaio' : 'adfasdfasdfasdfasdasdfa'
    })

    var logocompany = new HttpParams().set("Role","admin");

    var cloneRequest = request.clone({headers:updateHeaders , params: logocompany});

    return next.handle(cloneRequest);
    //  return next.handle(request);
  }
}
