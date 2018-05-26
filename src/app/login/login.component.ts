import { Login } from './../api/login';
import { Component, OnInit, EventEmitter } from '@angular/core';

import * as shajs from 'sha.js';

import { ApiService } from '../api/api.service';
import { User } from '../user/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  apiError: string[] = [];

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      const user: User = new User();
      user.email = this.formulario.get('email').value;
      user.senha = shajs('sha256').update(this.formulario.get('senha').value).digest('hex');

      this.apiService.login(user).subscribe(
        res => {
          let login: Login = { token: res["token"], email: res["email"], cargo: res["cargo"] };
          localStorage.setItem("login", JSON.stringify(login));
          this.router.navigate(['/']);
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

  mensagensEmailInvalido() {
    if (this.verificaCampoInvalido('email')) {
      const erros = this.formulario.get('email').errors;
      var msgs = [];

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
      const erros = this.formulario.get('senha').errors;
      var msgs = [];

      if (erros.required) {
        msgs.push("Senha não informada.");
      }

      if (erros.required === undefined && erros.minlength !== undefined) {
        msgs.push("Senha deve possuir no mínimo 3 caracteres.");
      }

      if (erros.required === undefined && erros.maxlength !== undefined) {
        msgs.push("Senha deve possuir no máximo 20 caracteres.");
      }

      return msgs;
    }

    return [];
  }

}
