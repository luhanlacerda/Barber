import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        
        if (localStorage.getItem('login') && state.url === "/login") {
            // if user is logged and trying access login, then redirect to main page
            this.router.navigate(['/']);
            return false;
        } else if (!localStorage.getItem('login') && state.url !== "/login") {
            // if user is not logged, then redirect to login page
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}