export class Funcionario {
    readonly id: number;
    private _nome: string;
    private _cpf: string;
    private _rg: string;
    private _endereco: string;
    private _dataNascimento: Date;
    //TODO: Criar a classe Estado e consequentemente mudar o tipo da variável abaixo para Estado
    private _estado: any;

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

    public get endereco(): string {
        return this._endereco;
    }
    
    public set endereco(endereco: string) {
        this._endereco = endereco;
    }

    public get dataNascimento(): Date {
        return this._dataNascimento;
    }
    
    public set dataNascimento(dataNascimento: Date) {
        this._dataNascimento = dataNascimento;
    }

    public get estado(): string {
        return this._estado;
    }
    
    public set estado(estado: string) {
        this._estado = estado;
    }

}
