import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { User } from '../user/user';

@Injectable()
export class ApiService {

  private basePath: String = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(this.basePath + "/usuario/login", { email: user.email, senha: user.senha });
  }

  registrarCliente(user: User) {
    return this.http.post(this.basePath + "/usuario/registrar/cliente", { email: user.email, senha: user.senha });
  }

}
