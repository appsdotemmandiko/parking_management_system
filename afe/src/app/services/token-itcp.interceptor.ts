import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpXsrfTokenExtractor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenItcpInterceptor implements HttpInterceptor {
  
  headerName = 'X-XSRF-TOKEN';
  
  constructor(private tokenService: HttpXsrfTokenExtractor) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.method === 'GET' || request.method === 'HEAD') {
      return next.handle(request);
    }

    const token = this.tokenService.getToken();

    // Check for an existing header
    if (token !== null && !request.headers.has(this.headerName)) {
      request = request.clone({headers: request.headers.set(this.headerName, token)});
    }
    return next.handle(request);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenItcpInterceptor, multi: true },
];
