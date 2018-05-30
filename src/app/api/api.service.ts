import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { User } from '../classesBasicas/user';

@Injectable()
export class ApiService {

  private basePath: String = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(this.basePath + "/usuario/login", { email: user.email, senha: user.senha });
  }

  registrarCliente(user: User) {
    return this.http.post(this.basePath + "/usuario/registrar/cliente", { nome: user.nome, cpf: user.cpf, email: user.email, senha: user.senha });
  }

  visualizarDados() {
    return this.http.get(this.basePath + "/usuario");
  }

  atualizarCliente(user: User) {
    let params = { nome: user.nome }
    if (user.senha !== undefined && user.senha !== null && user.senha !== "") {
      params["senha"] = user.senha;
    }

    return this.http.put(this.basePath + "/usuario", params);
  }

}
