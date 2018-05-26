import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarServicoComponent } from './cadastrar-servico/cadastrar-servico.component';

const routes: Routes = [
  { path: 'servico/cadastrar', component: CadastrarServicoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
