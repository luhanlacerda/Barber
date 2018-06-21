import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from './../../../shared/api/api.service';
import { Servico } from './../../../classesBasicas/servico';

@Component({
  selector: 'app-visualizar-servico',
  templateUrl: './visualizar-servico.component.html',
  styleUrls: ['./visualizar-servico.component.css']
})
export class VisualizarServicoComponent implements OnInit {

  servicos: Servico[];
  servicoActivated: Servico;
  isEditing: boolean;
  formulario: FormGroup;
  apiError: string[] = [];

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (res: { servicos: Servico[] }) => {
        this.servicos = res.servicos["servicos"];
      }
    );
    this.formulario = this.formBuilder.group({
      id: [""], 
      nome: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      descricao: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      valor: ["", [Validators.required, Validators.min(0), Validators.max(1500)]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      let servico: Servico = {
        id: this.servicoActivated.id,
        nome: this.formulario.get("nome").value,
        descricao: this.formulario.get("descricao").value,
        valor: this.formulario.get("valor").value
      };

      this.apiService.atualizarServico(servico).subscribe(
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

  onItemClicked(servico: Servico) {
    this.servicoActivated = servico;

    this.formulario.get("id").setValue(servico.id);
    this.formulario.get("nome").setValue(servico.nome);
    this.formulario.get("descricao").setValue(servico.descricao);
    this.formulario.get("valor").setValue(servico.valor);
  }

  verificaCampoInvalido(campo: string) {
    return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  mensagensNomeInvalido() {
    if (this.verificaCampoInvalido('nome')) {
      let erros = this.formulario.get('nome').errors;
      let msgs = [];

      if (erros.required) {
        msgs.push("Nome não informado.");
      }

      if (erros.required === undefined && erros.minlength !== undefined) {
        msgs.push(`Nome deve possuir no mínimo ${erros.minlength.requiredLength} caracteres.`);
      }

      if (erros.required === undefined && erros.maxlength !== undefined) {
        msgs.push(`Nome deve possuir no máximo ${erros.maxlength.requiredLength} caracteres.`);
      }

      return msgs;
    }

    return [];
  }

  mensagensDescricaoInvalido() {
    if (this.verificaCampoInvalido('descricao')) {
      let erros = this.formulario.get('descricao').errors;
      let msgs = [];

      if (erros.required) {
        msgs.push("Descrição não informado.");
      }

      if (erros.required === undefined && erros.minlength !== undefined) {
        msgs.push(`Descrição deve possuir no mínimo ${erros.minlength.requiredLength} caracteres.`);
      }

      if (erros.required === undefined && erros.maxlength !== undefined) {
        msgs.push(`Descrição deve possuir no máximo ${erros.maxlength.requiredLength} caracteres.`);
      }

      return msgs;
    }

    return [];
  }

  mensagensValorInvalido() {
    if (this.verificaCampoInvalido('valor')) {
      let erros = this.formulario.get('valor').errors;
      let msgs = [];

      if (erros.required) {
        msgs.push("Valor não informado.");
      }

      if (erros.required === undefined && erros.min !== undefined) {
        msgs.push(`Valor não deve ser menor que ${erros.min.min}.`);
      }

      if (erros.required === undefined && erros.max !== undefined) {
        msgs.push(`Valor não deve ser maior que ${erros.max.max}.`);
      }

      return msgs;
    }

    return [];
  }

}
