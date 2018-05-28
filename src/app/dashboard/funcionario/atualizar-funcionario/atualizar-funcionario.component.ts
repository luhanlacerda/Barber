import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-atualizar-funcionario',
  templateUrl: './atualizar-funcionario.component.html',
  styleUrls: ['./atualizar-funcionario.component.css']
})
export class AtualizarFuncionarioComponent implements OnInit {
  
  form_att_fuc: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }
  
  ngOnInit() {
    
    // this.form_att_fuc = this.formBuilder.group({

    //   estado: [null, Validators.required],
    //   endereco: [null, Validators.required],
    //   senha: [null, Validators.required],
    //   confirmarSenha: [null, Validators.required]
      
    // });
  
  }
  
  onSubmit() {
    console.log(this.form_att_fuc);
    
    /**
    * Consumir os servicos da API (Cadastro Funcionario)
    * 
    */
  }  
  
}
