import { HttpHandler, HttpRequest, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      console.log(`HTTP Interceptor::cloning request with access_token::${accessToken}`)
      const clone = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + accessToken)
      });
      console.log('HTTP Interceptor::Authorization header set');

      return next.handle(clone);
    } else {
      console.log('HTTP Interceptor::access token null::passing request through');
      return next.handle(req);
    }

  }

  constructor() { }
}
