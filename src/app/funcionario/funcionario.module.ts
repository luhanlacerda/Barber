import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { AtualizarFuncionarioComponent } from './atualizar-funcionario/atualizar-funcionario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSharedModule } from '../shared/form-shared/form-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    FormSharedModule,
    ShowHidePasswordModule.forRoot()
  ],
  declarations: [
    CadastrarFuncionarioComponent,
    AtualizarFuncionarioComponent
  ]
})
export class FuncionarioModule { }
