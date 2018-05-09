export class Endereco {
    private _logradouro: string;
    private _numero: string;
    private _complemento: string;
    private _bairro: string;
    private _cidade: string;
    private _uf: UF;
    private _cep: string;

    public get logradouro(): string {
        return this._logradouro;
    }
    
    public set logradouro(logradouro: string) {
        this._logradouro = logradouro;
    }

    public get numero(): string {
        return this._numero;
    }
    
    public set numero(numero: string) {
        this._numero = numero;
    }

    public get complemento(): string {
        return this._complemento;
    }
    
    public set complemento(complemento: string) {
        this._complemento = complemento;
    }

    public get bairro(): string {
        return this._bairro;
    }
    
    public set bairro(bairro: string) {
        this._bairro = bairro;
    }

    public get cidade(): string {
        return this._cidade;
    }
    
    public set cidade(cidade: string) {
        this._cidade = cidade;
    }
    public get uf(): UF {
        return this._uf;
    }
    
    public set uf(uf: UF) {
        this._uf = uf;
    }

    public get cep(): string {
        return this._cep;
    }
    
    public set cep(cep: string) {
        this._cep = cep;
    }
}

export enum UF {
    AC,
    AL,
    AP,
    AM,
    BA,
    CE,
    DF,
    ES,
    GO,
    MA,
    MT,
    MS,
    MG,
    PA,
    PB,
    PR,
    PE,
    PI,
    RJ,
    RN,
    RS,
    RO,
    RR,
    SC,
    SP,
    SE,
    TO
}