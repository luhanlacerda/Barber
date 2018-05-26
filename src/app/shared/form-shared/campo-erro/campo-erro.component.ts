import { FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-campo-erro',
  templateUrl: './campo-erro.component.html',
  styleUrls: ['./campo-erro.component.css']
})
export class CampoErroComponent implements OnInit {

  @Input() msgErro: string[];
  @Input() mostrarErro: boolean;

  constructor() { }

  ngOnInit() {
  }

}
