export class Servico {
    readonly id: number;
    private _nome: string;
    private _descricao: string;
    private _valor: number;
    private _situacao: any;

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get descricao(): string {
        return this._descricao;
    }
    
    public set descricao(descricao: string) {
        this._descricao = descricao;
    }

    public get valor(): number {
        return this._valor;
    }
    
    public set valor(valor: number) {
        this._valor = valor;
    }

    public get situacao(): any {
        return this._situacao;
    }
    
    public set situacao(situacao: any) {
        this._situacao = situacao;
    }
}
