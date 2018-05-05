import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { AtualizarFuncionarioComponent } from './atualizar-funcionario/atualizar-funcionario.component';

@NgModule({
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ],
  declarations: [
    CadastrarFuncionarioComponent,
    AtualizarFuncionarioComponent
  ]
})
export class FuncionarioModule { }
