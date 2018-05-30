import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../api/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { ConfigurarContaComponent } from './configurar-conta/configurar-conta.component';
import { CadastrarServicoComponent } from './servico/cadastrar-servico/cadastrar-servico.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { AtualizarFuncionarioComponent } from './funcionario/atualizar-funcionario/atualizar-funcionario.component';

const routes: Routes = [
  { path: 'dashboard', canActivate: [AuthGuard], children: [
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: 'configurar-conta', component: ConfigurarContaComponent },

    // Serviço
    { path: 'servico/cadastrar', component: CadastrarServicoComponent },

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
