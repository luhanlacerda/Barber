import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { User } from '../../classesBasicas/user';
import { Agendamento } from './../../classesBasicas/agendamento';
import { Servico } from '../../classesBasicas/servico';

@Injectable()
export class ApiService {

  private basePath: String = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  login(user: User) {
    let params = { email: user.email, senha: user.senha };

    return this.http.post(this.basePath + "/usuario/login", params);
  }

  registrarCliente(user: User) {
    let params = { nome: user.nome, cpf: user.cpf, email: user.email, senha: user.senha };

    return this.http.post(this.basePath + "/usuario/registrar/cliente", params);
  }

  visualizarDados() {
    return this.http.get(this.basePath + "/usuario");
  }

  atualizarCliente(user: User) {
    let params = { nome: user.nome };

    if (user.senha !== undefined && user.senha !== null && user.senha !== "") {
      params["senha"] = user.senha;
    }

    return this.http.put(this.basePath + "/usuario", params);
  }

  getServicos() {
    return this.http.get(this.basePath + "/servico");
  }

  solicitarAgendamento(agendamento: Agendamento) {
    let params = { horario: agendamento.horario, servicos: JSON.stringify(agendamento.servicos.map(s => s.id)) };

    return this.http.post(this.basePath + "/agendamento/cliente", params);
  }

  minhaAgenda() {
    return this.http.get(this.basePath + "/agendamento/cliente");
  }

  cadastrarServico(servico: Servico) {
    let params = { nome: servico.nome, descricao: servico.descricao, valor: servico.valor };

    return this.http.post(this.basePath + "/servico", params);
  }

  atualizarServico(servico: Servico) {
    let params = { nome: servico.nome, descricao: servico.descricao, valor: servico.valor };

    return this.http.put(this.basePath + `/servico/${servico.id}`, params);
  }

  visualizarAgendamentos() {
    return this.http.get(this.basePath + "/agendamento");
  }

  atualizarAgendamento(agendamento: Agendamento) {
    let params = { situacao: agendamento.situacao, pagamento: agendamento.pagamento };

    return this.http.put(this.basePath + `/agendamento/${agendamento.id}`, params);
  }

  registrarFuncionario(user: User) {
    let params = { nome: user.nome, cpf: user.cpf, email: user.email, senha: user.senha };

    return this.http.post(this.basePath + "/usuario/registrar/funcionario", params);
  }

}
