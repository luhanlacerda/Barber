import { Cargo } from "../cargo/cargo";
import { Endereco } from "../endereco/endereco";
import { Estado } from "../estado/estado";

export abstract class Pessoa {
    private _email: string;
    private _cargo: Cargo;
    private _nome: string;
    private _cpf: string;
    private _rg: string;
    private _endereco: Endereco;
    private _dataNascimento: Date;
    private _estado: Estado;
    private _sexo: string

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
    
    public get rg(): string {
        return this._rg;
    }
    
    public set rg(rg: string) {
        this._rg = rg;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }
    
    public set endereco(endereco: Endereco) {
        this._endereco = endereco;
    }

    public get dataNascimento(): Date {
        return this._dataNascimento;
    }
    
    public set dataNascimento(dataNascimento: Date) {
        this._dataNascimento = dataNascimento;
    }

    public get estado(): Estado {
        return this._estado;
    }
    
    public set estado(estado: Estado) {
        this._estado = estado;
    }

    public get sexo(): string {
        return this._sexo;
    }
    
    public set sexo(sexo: string) {
        this._sexo = sexo;
    }
}
