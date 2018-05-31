import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

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

}
