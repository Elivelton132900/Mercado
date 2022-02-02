import toastr from 'toastr'
import pexels from '../apis/pexels'
import itensApi from '../apis/itensApi'
import {
    LOGIN,
    LOGOUT,
    CRIAR_ITEM,
    MOSTRAR_ITENS,
    DELETAR_ITEM,
    MOSTRA_ITEM,
    CARRINHO,
    DELETAR_ITEM_CARRINHO,
    DELETAR_TUDO_CARRINHO,
    PROCURA_CARRINHO_E_DELETA,
    EDITA_ITEM,
    PROCURA_CARRINHO_E_ATUALIZA_NOME
} from './types'
import history from '../history'

export const googleAuthLogin = (response) => {
    return {
        type: LOGIN,
        payload: response
    }
}

export const googleAuthLogout = () => {
    return {
        type: LOGOUT
    }
}

export const criarItem = (infos) => async (dispatch) => {
    const { termo } = infos
    const response = await pexels(termo)
    if (response.data.photos.length > 0) {
        const url_imagem = response.data.photos[0].src.small
        const url_imagem_media = response.data.photos[0].src.medium
        const itemApi = await itensApi.post('/itens', { ...infos, url_imagem, url_imagem_media })
        dispatch({ type: CRIAR_ITEM, payload: { ...itemApi.data, url_imagem, url_imagem_media } })
        history.push('/')
        toastr.success('Item adicionado com sucesso.')
    } else {
        toastr.warning('Item não encontrado, procure por outro termo!')
    }

}

export const mostrarItens = () => async (dispatch) => {
    const listaItens = await itensApi.get('/itens')
    dispatch({ type: MOSTRAR_ITENS, payload: { ...listaItens.data } })

}

export const mostraItem = (id) => async (dispatch) => {
    const item = await itensApi.get(`/itens/${id}`)
    dispatch({ type: MOSTRA_ITEM, payload: { ...item.data } })
}

export const deletaItem = (id) => async (dispatch) => {
    await itensApi.delete(`/itens/${id}`)
    dispatch({ type: PROCURA_CARRINHO_E_DELETA, payload: id })
    dispatch({ type: DELETAR_ITEM, payload: id })
    history.push('/')
    toastr.success('Item deletado com sucesso.')
}

export const editaItem = (id, formValues) => async (dispatch) => {
    console.log('formv', formValues)
    const response = await itensApi.patch(`/itens/${id}`, formValues)
    const infos = {id: id, modificacoes: formValues }
    dispatch({type: PROCURA_CARRINHO_E_ATUALIZA_NOME, payload: infos})
    dispatch({type: EDITA_ITEM, payload: response.data})
    history.push('/')
    toastr.success('Item editado com sucesso.')
}

export const carrinho = (id) => async (dispatch) => {
    const item = await itensApi.get(`/itens/${id}`)
    dispatch({ type: CARRINHO, payload: item.data })
    toastr.success('Item adicionado ao carrinho.')
}

export const deletarItemCarrinho = (index) => {
    return {
        type: DELETAR_ITEM_CARRINHO,
        payload: index
    }
}

export const deletarTudoCarrinho = () => {
    return {
        type: DELETAR_TUDO_CARRINHO
    }
}