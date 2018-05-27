import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Login } from './login';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedRequest: HttpRequest<any> = req.clone();
    
    console.log('interceptor start');

    if ((!req.url.endsWith("/usuario/login") || !req.url.endsWith("/usuario/registrar/cliente")) && localStorage.getItem("login")) {
      let login: Login = JSON.parse(localStorage.getItem("login"));

      modifiedRequest.headers.append('Authorization', 'Bearer ' + login.token);

      console.log('interceptor modified');
    }
    
    console.log('interceptor end');
    
    return next.handle(modifiedRequest);
  }
}
