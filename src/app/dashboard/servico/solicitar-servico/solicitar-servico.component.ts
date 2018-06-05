import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbDateStructAdapter } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-adapter';
import * as moment from 'moment';

import { ApiService } from './../../../shared/api/api.service';
import { Servico } from '../../../classesBasicas/servico';
import { Agendamento } from './../../../classesBasicas/agendamento';

@Component({
  selector: 'app-solicitar-servico',
  templateUrl: './solicitar-servico.component.html',
  styleUrls: ['./solicitar-servico.component.css']
})
export class SolicitarServicoComponent implements OnInit {

  apiError: string[] = [];
  services: Servico[];
  cart: Servico[] = [];
  total: number = 0;
  horario;
  data;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (res: { servicos: Servico[] }) => {
        this.services = res.servicos["servicos"];
      }
    );
  }

  onSubmit() {
    if (this.cart.length > 0 && this.validarData() && this.validarHorario()) {
      let agendamento: Agendamento = {
        id: null,
        usuario_id: null,
        situacao: null,
        pagamento: null,
        horario: moment(`${this.data.day}/${this.data.month}/${this.data.year} ${this.horario.hour}:${this.horario.minute}`,
          "DD/MM/YYYY HH:mm").unix(),
        servicos: this.cart
      };

      this.apiService.solicitarAgendamento(agendamento).subscribe(
        res => {
          this.router.navigate(['/dashboard']);
        },
        err => { this.apiError = [err["error"]["message"]]; }
      );
    } else {
      this.apiError = [];
    }
  }

  addCart(service: Servico) {
    if (!this.cart.includes(service)) {
      this.cart.push(service);
      this.total += service.valor;
    } else {
      let index = this.cart.indexOf(service);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
      this.total -= service.valor;
    }
  }

  validarData() {
    return this.data !== undefined && this.data !== null && moment(`${this.data.day}/${this.data.month}/${this.data.year}`, "DD/MM/YYYY").isValid();
  }

  validarHorario() {
    return this.horario !== undefined && this.horario !== null && moment(`${this.horario.hour}:${this.horario.minute}`, "HH:mm").isValid();
  }

}
