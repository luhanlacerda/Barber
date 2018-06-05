import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormSharedModule } from './../shared/form-shared/form-shared.module';
import { CadastrarServicoComponent } from './servico/cadastrar-servico/cadastrar-servico.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ConfigurarContaComponent } from './usuario/configurar-conta/configurar-conta.component';
import { SolicitarServicoComponent } from './servico/solicitar-servico/solicitar-servico.component';
import { ClienteGuard } from '../shared/guards/cliente.guard';
import { ConfigurarContaResolver } from '../shared/resolvers/configurar-conta.resolver';
import { ServicoResolver } from '../shared/resolvers/servico.resolver';
import { MinhaAgendaComponent } from './agendamento/minha-agenda/minha-agenda.component';
import { MinhaAgendaResolver } from '../shared/resolvers/minha-agenda.resolver';
import { FuncionarioGuard } from '../shared/guards/funcionario.guard';
import { VisualizarServicoComponent } from './servico/visualizar-servico/visualizar-servico.component';
import { VisualizarAgendamentosComponent } from './agendamento/visualizar-agendamentos/visualizar-agendamentos.component';
import { VisualizarAgendamentosResolver } from '../shared/resolvers/visualizar-agendamentos.resolver';

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

    // Agenda
    MinhaAgendaComponent,

    // Serviço
    CadastrarServicoComponent,
    SolicitarServicoComponent,

    // Funcionário
    CadastrarFuncionarioComponent,

    // Usuário
    ConfigurarContaComponent,

    VisualizarServicoComponent,

    VisualizarAgendamentosComponent
  ],
  providers: [
    ClienteGuard,
    FuncionarioGuard,
    ConfigurarContaResolver,
    MinhaAgendaResolver,
    ServicoResolver,
    VisualizarAgendamentosResolver
  ]
})
export class DashboardModule { }
