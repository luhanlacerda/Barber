import { AbstractControl } from "@angular/forms";

export class PasswordValidator {

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

}
