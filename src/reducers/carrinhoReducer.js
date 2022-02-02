/* eslint-disable import/no-anonymous-default-export */

import { CARRINHO, 
    DELETAR_ITEM_CARRINHO, 
    DELETAR_TUDO_CARRINHO, 
    PROCURA_CARRINHO_E_DELETA, 
    PROCURA_CARRINHO_E_ATUALIZA_NOME
 } from "../actions/types"

let carrinho = []

export default (state = carrinho, action) => {
    switch (action.type) {
        case CARRINHO:
            carrinho = [...carrinho, action.payload]
            return carrinho
        case DELETAR_ITEM_CARRINHO:
            carrinho = carrinho.filter((_el, index) => index !== action.payload)
            return carrinho
        case DELETAR_TUDO_CARRINHO:
            carrinho = []
            return carrinho
        case PROCURA_CARRINHO_E_DELETA:
            carrinho = carrinho.filter(el => parseInt(el.id) !== parseInt(action.payload))
            return carrinho
        case PROCURA_CARRINHO_E_ATUALIZA_NOME:
            let itensModificados = carrinho.filter(el => parseInt(el.id) === parseInt(action.payload.id))
            function modificaItens() {
                carrinho = carrinho.filter(el => parseInt(el.id) !== parseInt(action.payload.id))
                itensModificados.forEach(element => {
                    element.nomeItem = action.payload.modificacoes.nomeItem
                    element.valorItem = action.payload.modificacoes.valorItem
                    element.descricaoItem = action.payload.modificacoes.valorItem
                });
                carrinho = [...carrinho, ...itensModificados]
                return carrinho
            }
            modificaItens()
            return carrinho
        default:
            return state
    }
}