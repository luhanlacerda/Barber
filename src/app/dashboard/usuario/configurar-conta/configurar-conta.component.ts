import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../../shared/api/api.service';
import { BarberValidator } from '../../../shared/validators/barber-validator';
import { User } from '../../../classesBasicas/user';

@Component({
  selector: 'app-configurar-conta',
  templateUrl: './configurar-conta.component.html',
  styleUrls: ['./configurar-conta.component.css']
})
export class ConfigurarContaComponent implements OnInit {

  formulario: FormGroup;
  apiError: string[] = [];

  constructor(private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(5)]],
      cpf: [""],
      cargo: [""],
      email: [""],
      senha: ["", [BarberValidator.MinLengthOrNaN(3), BarberValidator.MaxLengthOrNan(20)]],
      confirmarSenha: [""]
    },
    {
      validator: BarberValidator.MatchPassword
    });

    this.activatedRoute.data.subscribe(
      (res: {user: User}) => {
        this.formulario.get("nome").setValue(res.user.nome);
        this.formulario.get("cpf").setValue(res.user.cpf);
        this.formulario.get("cargo").setValue(res.user.cargo);
        this.formulario.get("email").setValue(res.user.email);
      }
    );
  }

  onSubmit() {
    if (this.formulario.valid) {
      let user: User = new User();
      user.nome = this.formulario.get("nome").value;
      if (this.formulario.get('senha').value !== "") {
        user.senha = this.formulario.get('senha').value;
      }

      this.apiService.atualizarCliente(user).subscribe(
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

  mensagensSenhaInvalida() {
    if (this.verificaCampoInvalido('senha')) {
      let erros = this.formulario.get('senha').errors;
      let msgs = [];

      if (erros.minlength !== undefined) {
        msgs.push(`Senha deve possuir no mínimo ${erros.minlength.requiredLength} caracteres.`);
      }

      if (erros.maxlength !== undefined) {
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
