import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LarngCsrfTokenService } from './larng-csrf-token.service';

export const authGuard: CanActivateFn = (route, state) => {

  const svc = inject(LarngCsrfTokenService)
  const rt = inject(Router)

  if(!svc.getCode()){
    rt.navigate(['/login'], {queryParams: {redirectUrl: state.url}})
    return false;
  }
  return true;

};
