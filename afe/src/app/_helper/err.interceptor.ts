import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpInterceptorFn
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrInterceptor implements HttpInterceptor {

  
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}

export const errInterceptorProviders: HttpInterceptorFn = (req,next)=>{
  
  const router = inject(Router);

  return next(req).pipe(catchError((err) => {
    if([401,403].includes(JSON.parse(err.status))){
      router.navigate(['/login'])
    }

    const e = err.error.status || err.statusText

    return throwError(() => e)
    
  }));
}
