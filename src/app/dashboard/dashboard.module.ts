import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormSharedModule } from './../shared/form-shared/form-shared.module';
import { CadastrarServicoComponent } from './servico/cadastrar-servico/cadastrar-servico.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { AtualizarFuncionarioComponent } from './funcionario/atualizar-funcionario/atualizar-funcionario.component';
import { ConfigurarContaComponent } from './configurar-conta/configurar-conta.component';
import { SolicitarServicoComponent } from './servico/solicitar-servico/solicitar-servico.component';
import { ClienteGuard } from '../shared/guards/cliente.guard';
import { ConfigurarContaResolver } from '../shared/resolvers/configurar-conta.resolver';
import { SolicitarServicoResolver } from '../shared/resolvers/solicitar-servico.resolver';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormSharedModule,
    ShowHidePasswordModule.forRoot(),
    NgbModule
  ],
  declarations: [
    DashboardComponent,

    // Serviço
    CadastrarServicoComponent,
    SolicitarServicoComponent,

    // Funcionário
    CadastrarFuncionarioComponent,
    AtualizarFuncionarioComponent,

    // Usuário
    ConfigurarContaComponent
  ],
  providers: [
    ClienteGuard,
    ConfigurarContaResolver,
    SolicitarServicoResolver
  ]
})
export class DashboardModule { }
