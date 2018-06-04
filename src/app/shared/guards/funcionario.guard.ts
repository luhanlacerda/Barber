import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FuncionarioGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('login')) {
      try {
        let login = JSON.parse(localStorage.getItem('login'));

        if (login.cargo === "FUNCIONARIO") {
          return true;
        } else {
          this.router.navigate(['/dashboard']);
          return false;
        }
      } catch (err) {
      }
    }

    this.router.navigate(['/login']);
    return false;
  }

}
