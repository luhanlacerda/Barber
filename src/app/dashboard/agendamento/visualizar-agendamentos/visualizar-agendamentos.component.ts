import { ApiService } from './../../../shared/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import * as moment from 'moment';

import { Agendamento } from './../../../classesBasicas/agendamento';
import { BarberValidator } from '../../../shared/validators/barber-validator';
import { Situacao } from '../../../classesBasicas/situacao';
import { Pagamento } from '../../../classesBasicas/pagamento';

@Component({
  selector: 'app-visualizar-agendamentos',
  templateUrl: './visualizar-agendamentos.component.html',
  styleUrls: ['./visualizar-agendamentos.component.css']
})
export class VisualizarAgendamentosComponent implements OnInit {

  agendamentos: Agendamento[];
  agendamentoActivated: Agendamento;
  isEditing: boolean;
  formulario: FormGroup;
  apiError: string[] = [];
  horario;
  data;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (res: {agendamentos: Agendamento[]}) => {
        this.agendamentos = res.agendamentos["agendamentos"];
      }
    );
    this.formulario = this.formBuilder.group({
      id: [{value: "", disabled: true}],
      situacao: ["", BarberValidator.Situacao],
      pagamento: ["", BarberValidator.Pagamento]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      let agendamento: Agendamento = {
        id: this.agendamentoActivated.id,
        usuario_id: this.agendamentoActivated.usuario_id,
        horario: this.agendamentoActivated.horario,
        situacao: this.formulario.get("situacao").value,
        pagamento: this.formulario.get("pagamento").value,
        servicos: this.agendamentoActivated.servicos
      }

      this.apiService.atualizarAgendamento(agendamento).subscribe(
        res => { 
          this.router.navigate(['/dashboard']);
        },
        err => { this.apiError = [err["error"]["message"]]; }
      );
    } else {
      this.apiError = [];
    }
  }

  onEdit() {
    if (!this.isEditing) {
      this.isEditing = true;
    } else {
      this.isEditing = false;
    }
  }

  onItemClicked(agendamento: Agendamento) {
    this.agendamentoActivated = agendamento;

    this.formulario.get("id").setValue(agendamento.id);

    let date = moment.unix(agendamento.horario);
    this.horario = { hour: date.hour() + 1 , minute: date.minute() };
    this.data = { day: date.date() , month: date.month() + 1 , year: date.year() };
  }

  getSituacao() {
    return Object.values(Situacao);
  }

  getPagamento() {
    return Object.values(Pagamento);
  }

}
