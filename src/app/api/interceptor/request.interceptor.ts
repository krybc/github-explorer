import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.endsWith('.json')) {
      request = request.clone({url: `${environment.apiUrl}/${request.url}`});
      request = request.clone({headers: request.headers.set('Accept', 'application/vnd.github.v3+json')});
    }

    return next.handle(request);
  }
}
