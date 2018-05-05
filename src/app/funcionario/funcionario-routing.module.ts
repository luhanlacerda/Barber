import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { AtualizarFuncionarioComponent } from './atualizar-funcionario/atualizar-funcionario.component';

const routes: Routes = [
  /*{ path: 'funcionario', redirectTo: '',
    children: [
      { path: 'cadastrar', component: CadastrarFuncionarioComponent },
      { path: 'atualizar/:id', component: AtualizarFuncionarioComponent }
    ]
  }*/
  { path: 'funcionario/cadastrar', component: CadastrarFuncionarioComponent },
  { path: 'funcionario/atualizar/:id', component: AtualizarFuncionarioComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
