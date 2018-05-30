import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-servico',
  templateUrl: './cadastrar-servico.component.html',
  styleUrls: ['./cadastrar-servico.component.css']
})
export class CadastrarServicoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      descricao: [null, Validators.required],
      valor: [null, Validators.required]
    });

  }

  verificaCampoInvalido(campo: string) {
    return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || 
    this.formulario.get(campo).dirty);
  }

  onSubmit(){
    console.log("worked");
    console.log(this.formulario.controls);
  }

  descricaoInvalida() {
    if (this.verificaCampoInvalido('descricao')) {
      const erros = this.formulario.get('descricao').errors;
      var msgs = [];
      
      if (erros.required) {
        msgs.push("Descrição do serviço não informado.");
      }
      
      return msgs;
    }
    
    return [];
  }

  valorNotInformed() {
    if (this.verificaCampoInvalido('valor')) {
      const erros = this.formulario.get('valor').errors;
      var msgs = [];
      
      if (erros.required) {
        msgs.push("Valor não informado.");
      }
      
      return msgs;
    }
    
    return [];
  }

}
