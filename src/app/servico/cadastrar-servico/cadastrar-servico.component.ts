import { FormGroup, FormBuilder } from '@angular/forms';
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
      descricao: [null],
      valor: [null]
    });
  }

  onSubmit(){
    //this.formulario.controls;
  }


}
