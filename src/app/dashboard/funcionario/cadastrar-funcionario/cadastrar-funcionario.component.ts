import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {
  
  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      rg: [null, Validators.required],
      sexo: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      mes: [null, Validators.required],
      ano: [null, Validators.required],
      estado: [null, Validators.required],
      endereco: [null, Validators.required],
      senha: [null, Validators.required],
      confirmarSenha: [null, Validators.required]
    });
  }
  
  onSubmit() {
    console.log("worked");
    console.log(this.formulario.controls);
    
    /**
    * Consumir os servicos da API (Cadastro Funcionario)
    * 
    */
  }
  verificaCampoInvalido(campo: string) {
    return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }
  
  nomeInvalido() {
    if (this.verificaCampoInvalido('nome')) {
      const erros = this.formulario.get('nome').errors;
      var msgs = [];
      
      if (erros.required) {
        msgs.push("Nome não informado.");
      }
      
      // if (erros.required === undefined && erros.minlength !== undefined) {
      //   msgs.push("Nome deve possuir no mínimo ... caracteres.");
      // }
      
      // if (erros.required === undefined && erros.maxlength !== undefined) {
      //   msgs.push("Senha deve possuir no máximo 200 caracteres.");
      // }
      
      return msgs;
    }
    
    return [];
  }
  
  rgInvalido(){
    if (this.verificaCampoInvalido('rg')) {
      const erros = this.formulario.get('rg').errors;
      var msgs = [];
      
      if (erros.required) {
        msgs.push("RG não informado.");
      }
      
      // if (erros.required === undefined && erros.minlength !== undefined) {
      //   msgs.push("Nome deve possuir no mínimo ... caracteres.");
      // }
      
      // if (erros.required === undefined && erros.maxlength !== undefined) {
      //   msgs.push("Senha deve possuir no máximo 200 caracteres.");
      // }
      
      return msgs;
    }
    return [];
  }

  cpfInvalido(){
    if (this.verificaCampoInvalido('cpf')) {
      const erros = this.formulario.get('cpf').errors;
      var msgs = [];
      
      if (erros.required) {
        msgs.push("CPF não informado.");
      }
      
      return msgs;
    }
    return [];
  }


  enderecoInvalido(){
  if (this.verificaCampoInvalido('endereco')) {
    const erros = this.formulario.get('endereco').errors;
    var msgs = [];
    
    if (erros.required) {
      msgs.push("Endereco não informado.");
    }
    
    if (erros.required === undefined && erros.maxlength !== undefined) {
      msgs.push("Endereço deve possuir no máximo 200 caracteres.");
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
