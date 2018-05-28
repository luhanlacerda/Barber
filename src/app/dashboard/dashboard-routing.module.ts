import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarServicoComponent } from './servico/cadastrar-servico/cadastrar-servico.component';
import { CadastrarFuncionarioComponent } from './funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { AtualizarFuncionarioComponent } from './funcionario/atualizar-funcionario/atualizar-funcionario.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../api/auth.guard';

const routes: Routes = [
  { path: 'dashboard', canActivate: [AuthGuard], children: [
    { path: '', component: DashboardComponent, pathMatch: 'full' },

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
