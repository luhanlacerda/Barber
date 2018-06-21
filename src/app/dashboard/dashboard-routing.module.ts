import { VisualizarServicoComponent } from './servico/visualizar-servico/visualizar-servico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { ClienteGuard } from '../shared/guards/cliente.guard';
import { DashboardComponent } from './dashboard.component';
import { ConfigurarContaComponent } from './usuario/configurar-conta/configurar-conta.component';
import { CadastrarServicoComponent } from './servico/cadastrar-servico/cadastrar-servico.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { SolicitarServicoComponent } from './servico/solicitar-servico/solicitar-servico.component';
import { ServicoResolver } from '../shared/resolvers/servico.resolver';
import { ConfigurarContaResolver } from '../shared/resolvers/configurar-conta.resolver';
import { MinhaAgendaComponent } from './agendamento/minha-agenda/minha-agenda.component';
import { MinhaAgendaResolver } from '../shared/resolvers/minha-agenda.resolver';
import { FuncionarioGuard } from '../shared/guards/funcionario.guard';
import { VisualizarAgendamentosComponent } from './agendamento/visualizar-agendamentos/visualizar-agendamentos.component';
import { VisualizarAgendamentosResolver } from '../shared/resolvers/visualizar-agendamentos.resolver';

const routes: Routes = [
  { path: 'dashboard', canActivate: [AuthGuard], children: [
    { path: '', component: DashboardComponent, pathMatch: 'full' },

    // Usuário
    { path: 'configurar-conta', component: ConfigurarContaComponent, resolve: { user: ConfigurarContaResolver } },

    // Serviço
    { path: 'servico/cadastrar', component: CadastrarServicoComponent, canActivate: [FuncionarioGuard] },
    { path: 'servico/visualizar', component: VisualizarServicoComponent, canActivate: [FuncionarioGuard], resolve: { servicos: ServicoResolver } },
    { path: 'servico/solicitar', component: SolicitarServicoComponent, canActivate: [ClienteGuard], resolve: { servicos: ServicoResolver } },

    // Agenda
    { path: 'agendamento/meu', component: MinhaAgendaComponent, canActivate: [ClienteGuard], resolve: { agendamentos: MinhaAgendaResolver } },
    { path: 'agendamentos/todos', component: VisualizarAgendamentosComponent, canActivate: [FuncionarioGuard], resolve: { agendamentos: VisualizarAgendamentosResolver } },

    // Funcionário
    { path: 'funcionario/cadastrar', component: CadastrarFuncionarioComponent, canActivate: [FuncionarioGuard] }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
