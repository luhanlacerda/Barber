import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

import { Situacao } from "../../classesBasicas/situacao";
import { Pagamento } from "../../classesBasicas/pagamento";

export class BarberValidator {

  static MatchPassword(control: AbstractControl) {
    let password = control.get('senha').value; // to get value in input tag
    let confirmPassword = control.get('confirmarSenha').value; // to get value in input tag
    if (password != confirmPassword) {
      control.get('confirmarSenha').setErrors({
        mismatchPassword: true
      });
    }

    return null;
  }

  static ExactLength(length: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return control.value === undefined || control.value === null || control.value.length !== length ? { exactLength: { requiredLength: length } } : null;
    };
  }

  static OnlyNumbers(control: AbstractControl): ValidationErrors | null {
    let isValid = /^\d+$/.test(control.value);
    return !isValid ? { onlyNumbers: true } : null;
  }

  static MinLengthOrNaN(length: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return control.value !== undefined && control.value !== null && control.value !== "" && control.value.length < length ? { minlength: { actualLength: control.value.length, requiredLength: length } } : null;
    };
  }

  static MaxLengthOrNan(length: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return control.value !== undefined && control.value !== null && control.value !== "" && control.value.length > length ? { maxlength: { actualLength: control.value.length, requiredLength: length } } : null;
    };
  }

  static Situacao(control: AbstractControl): ValidationErrors | null {
    return !Object.values(Situacao).includes(control.value) ? { situacao: true } : null;
  }

  static Pagamento(control: AbstractControl): ValidationErrors | null {
    return !Object.values(Pagamento).includes(control.value) ? { pagamento: true } : null;
  }

}
