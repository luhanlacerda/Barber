import { Cargo } from "./cargo";

export abstract class Pessoa {
    private _email: string;
    private _cargo: Cargo;
    private _nome: string;
    private _cpf: string;

    public get email(): string {
        return this._email;
    }
    
    public set email(email: string) {
        this._email = email;
    }

    public get cargo(): Cargo {
        return this._cargo;
    }
    
    public set cargo(cargo: Cargo) {
        this._cargo = cargo;
    }

    public get nome(): string {
        return this._nome;
    }
    
    public set nome(nome: string) {
        this._nome = nome;
    }

    public get cpf(): string {
        return this._cpf;
    }
    
    public set cpf(cpf: string) {
        this._cpf = cpf;
    }
}
