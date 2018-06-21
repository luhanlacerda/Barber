import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

import { Agendamento } from '.././../../classesBasicas/agendamento';
import { Situacao } from '../../../classesBasicas/situacao';
import { Pagamento } from '../../../classesBasicas/pagamento';
import { Servico } from '../../../classesBasicas/servico';

@Component({
  selector: 'app-minha-agenda',
  templateUrl: './minha-agenda.component.html',
  styleUrls: ['./minha-agenda.component.css']
})
export class MinhaAgendaComponent implements OnInit {

  agendamentos: Agendamento[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (res: {agendamentos: Agendamento[]}) => {
        this.agendamentos = res.agendamentos["agendamentos"];
      }
    );
  }

  gerarData(data: number) {
    return moment.unix(data).format("DD/MM/YYYY HH:mm");
  }

  gerarServicos(servicos: Servico[]) {
    return servicos.map(s => s.nome).join(", ");
  }

  gerarCusto(servicos: Servico[]) {
    return servicos.map(s => s.valor).reduce((previousValue, currentValue) => previousValue + currentValue);
  }

}
