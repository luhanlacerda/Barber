import { CadastrarServicoComponent } from './cadastrar-servico/cadastrar-servico.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormSharedModule } from '../shared/form-shared/form-shared.module';
import { ServicoRoutingModule } from './servico-routing.module';
import { SolicitarServicoComponent } from './solicitar-servico/solicitar-servico.component';

@NgModule({
  imports: [
    CommonModule,
    ServicoRoutingModule,
    FormSharedModule
  ],
  declarations: [
    CadastrarServicoComponent,
    SolicitarServicoComponent,
  ]
})
export class ServicoModule { }
