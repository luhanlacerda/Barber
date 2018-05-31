import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import "rxjs/add/observable/of";

import { Servico } from '../../classesBasicas/servico';
import { ApiService } from '../api/api.service';

@Injectable()
export class SolicitarServicoResolver implements Resolve<Object> {
  constructor(private apiService: ApiService) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.apiService.getServicos().pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      //console.error('An error occurred:', error.error.message);
      return Observable.of(error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      //console.error(
      //  `Backend returned code ${error.status}, ` +
      //  `body was: ${error.error}`);
      return Observable.of(error.error);
    }
    // return an observable with a user-facing error message
    //return throwError(
    //  'Something bad happened; please try again later.');
  };
}