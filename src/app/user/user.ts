import * as shajs from 'sha.js';

import { Pessoa } from "../pessoa/pessoa";

export class User extends Pessoa {

    private _senha: string;

    public get senha(): string {
        return this._senha;
    }
    
    public set senha(senha: string) {
        this._senha = shajs('sha256').update(senha).digest('hex');
    }
}
