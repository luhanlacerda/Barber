import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from '../../../shared/api/api.service';
import { BarberValidator } from '../../../shared/validators/barber-validator';
import { User } from '../../../classesBasicas/user';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {
  
  formulario: FormGroup;
  apiError: string[] = [];
  
  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(5)]],
      cpf: ["", [Validators.required, BarberValidator.OnlyNumbers, BarberValidator.ExactLength(11)]],
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      confirmarSenha: [""]
    },
    {
      validator: BarberValidator.MatchPassword
    });
  }
  
  onSubmit() {
    if (this.formulario.valid) {
      let user: User = new User();
      user.nome = this.formulario.get("nome").value;
      user.cpf = this.formulario.get("cpf").value;
      user.email = this.formulario.get("email").value;
      user.senha = this.formulario.get('senha').value;

      this.apiService.registrarFuncionario(user).subscribe(
        res => {
          this.router.navigate(['/dashboard']);
        },
        err => { this.apiError = [err["error"]["message"]]; }
      );
    } else {
      this.apiError = [];
    }
  }

  verificaCampoInvalido(campo: string) {
    return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  verificaConfirmarSenha() {
    return this.verificaCampoInvalido("confirmarSenha") || (this.formulario.get("confirmarSenha").invalid && (this.formulario.get("senha").touched || this.formulario.get("senha").dirty));
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

      return msgs;
    }

    return [];
  }

  mensagensCpfInvalido() {
    if (this.verificaCampoInvalido('cpf')) {
      let erros = this.formulario.get('cpf').errors;
      let msgs = [];

      if (erros.required) {
        msgs.push("CPF não informado.");
      }

      if (erros.onlyNumbers) {
        msgs.push("CPF deve conter apenas números.");
      }

      if (erros.exactLength !== undefined) {
        msgs.push(`CPF deve conter ${erros.exactLength.requiredLength} caracteres.`);
      }

      return msgs;
    }

    return [];
  }

  mensagensEmailInvalido() {
    if (this.verificaCampoInvalido('email')) {
      let erros = this.formulario.get('email').errors;
      let msgs = [];

      if (erros.required) {
        msgs.push("Email não informado.");
      }

      if (erros.email) {
        msgs.push("Email inválido.");
      }

      return msgs;
    }

    return [];
  }

  mensagensSenhaInvalida() {
    if (this.verificaCampoInvalido('senha')) {
      let erros = this.formulario.get('senha').errors;
      let msgs = [];

      if (erros.required) {
        msgs.push("Senha não informada.");
      }

      if (erros.required === undefined && erros.minlength !== undefined) {
        msgs.push(`Senha deve possuir no mínimo ${erros.minlength.requiredLength} caracteres.`);
      }

      if (erros.required === undefined && erros.maxlength !== undefined) {
        msgs.push(`Senha deve possuir no máximo ${erros.maxlength.requiredLength} caracteres.`);
      }

      return msgs;
    }

    return [];
  }

  mensagensConfirmarSenhaInvalida() {
    if (this.verificaConfirmarSenha()) {
      let erros = this.formulario.get('confirmarSenha').errors;
      let msgs = [];

      if (erros.mismatchPassword) {
        msgs.push("A Confirmação de Senha deve ser idêntica à senha informada anteriormente.");
      }

      return msgs;
    }

    return [];
  }

}
