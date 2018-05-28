import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormSharedModule } from './../shared/form-shared/form-shared.module';
import { CadastrarServicoComponent } from './servico/cadastrar-servico/cadastrar-servico.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { AtualizarFuncionarioComponent } from './funcionario/atualizar-funcionario/atualizar-funcionario.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormSharedModule,
    ShowHidePasswordModule.forRoot()
  ],
  declarations: [
    // Serviço
    CadastrarServicoComponent,

    // Funcionário
    CadastrarFuncionarioComponent,
    AtualizarFuncionarioComponent
  ]
})
export class DashboardModule { }
