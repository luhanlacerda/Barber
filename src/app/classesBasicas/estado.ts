export class Estado {
    readonly id: number;
    private _descricao: string;

    public get descricao(): string {
        return this._descricao;
    }
    
    public set descricao(descricao: string) {
        this._descricao = descricao;
    }
}
