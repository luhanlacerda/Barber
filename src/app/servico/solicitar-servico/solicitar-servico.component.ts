import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitar-servico',
  templateUrl: './solicitar-servico.component.html',
  styleUrls: ['./solicitar-servico.component.css']
})
export class SolicitarServicoComponent implements OnInit {

  formulario: FormBuilder;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  // verificaCampoInvalido(campo: string) {
  //   return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || 
  //   this.formulario.get(campo).dirty);
  // }

  onSubmit(){
    console.log("worked");
    // console.log(this.formulario.controls);
  }

}
