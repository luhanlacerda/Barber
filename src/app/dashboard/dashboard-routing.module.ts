import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { ClienteGuard } from '../shared/guards/cliente.guard';
import { DashboardComponent } from './dashboard.component';
import { ConfigurarContaComponent } from './configurar-conta/configurar-conta.component';
import { CadastrarServicoComponent } from './servico/cadastrar-servico/cadastrar-servico.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { AtualizarFuncionarioComponent } from './funcionario/atualizar-funcionario/atualizar-funcionario.component';
import { SolicitarServicoComponent } from './servico/solicitar-servico/solicitar-servico.component';
import { SolicitarServicoResolver } from '../shared/resolvers/solicitar-servico.resolver';
import { ConfigurarContaResolver } from '../shared/resolvers/configurar-conta.resolver';

const routes: Routes = [
  { path: 'dashboard', canActivate: [AuthGuard], children: [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'configurar-conta', component: ConfigurarContaComponent, resolve: { user: ConfigurarContaResolver } },

    // Serviço
    { path: 'servico/cadastrar', component: CadastrarServicoComponent },
    { path: 'servico/solicitar', component: SolicitarServicoComponent, canActivate: [ClienteGuard], resolve: { servicos: SolicitarServicoResolver } },

    // Funcionário
    { path: 'funcionario/cadastrar', component: CadastrarFuncionarioComponent },
    { path: 'funcionario/atualizar', component: AtualizarFuncionarioComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
