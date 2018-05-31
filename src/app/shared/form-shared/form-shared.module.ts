import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoErroComponent } from './campo-erro/campo-erro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormDebugComponent,
    CampoErroComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormDebugComponent,
    CampoErroComponent
  ]
})
export class FormSharedModule { }
