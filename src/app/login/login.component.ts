import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../shared/api/api.service';
import { User } from '../classesBasicas/user';
import { Login } from '../classesBasicas/login';

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
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      let user: User = new User();
      user.email = this.formulario.get('email').value;
      user.senha = this.formulario.get('senha').value;

      this.apiService.login(user).subscribe(
        res => {
          let login: Login = { token: res["token"], email: user.email, cargo: res["cargo"] };
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
