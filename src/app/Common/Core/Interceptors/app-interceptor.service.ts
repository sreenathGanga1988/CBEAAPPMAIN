import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AppInterceptorService implements HttpInterceptor {
  constructor() {}

  hanbleErrorlog(error: HttpErrorResponse) {
    console.log('Error has occured  ');
    return throwError(error);
  }


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const myheaders = new HttpHeaders({
      MyAuthorization: 'sreenath',
    });

    console.log('interscepting');
    const reqclone = req.clone({
      headers: myheaders,
    });

    return next.handle(reqclone).pipe( catchError( this.hanbleErrorlog));;
  }
}
