import { Pessoa } from "../pessoa/pessoa";

export class User extends Pessoa {

    private _senha: string;

    public get senha(): string {
        return this._senha;
    }
    
    public set senha(senha: string) {
        this._senha = senha;
    }
}
