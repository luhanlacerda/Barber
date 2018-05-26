import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoErroComponent } from './campo-erro/campo-erro.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormDebugComponent,
    CampoErroComponent
  ],
  exports: [
    ReactiveFormsModule,
    FormDebugComponent,
    CampoErroComponent
  ]
})
export class FormSharedModule { }
