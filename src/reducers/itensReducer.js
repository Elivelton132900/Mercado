/* eslint-disable import/no-anonymous-default-export */
import {
    MOSTRAR_ITENS, DELETAR_ITEM, MOSTRA_ITEM, EDITA_ITEM
} from '../actions/types'

export default (state={}, action) => {
    switch (action.type) {
        case MOSTRAR_ITENS:
            return { ...action.payload }
        case DELETAR_ITEM:
            return { ...action.payload }
        case MOSTRA_ITEM:
            return { ...action.payload }
        case EDITA_ITEM: 
            return {...action.payload}
        default:
            return state
    }
}