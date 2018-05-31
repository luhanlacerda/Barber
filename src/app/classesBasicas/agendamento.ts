import { Situacao } from "./situacao";
import { Pagamento } from "./pagamento";
import { Servico } from './servico';

export interface Agendamento {
    id: number;
    usuario_id: number;
    horario: number;
    situacao: Situacao;
    pagamento: Pagamento;
    servicos: Servico[];
}