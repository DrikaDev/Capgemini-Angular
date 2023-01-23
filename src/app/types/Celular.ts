export interface Celular {
    id: number;
    nome: string;
    // com ponto de interrogação significa que é opcional:
    descricao?: string;
    esgotado: boolean;
}