import React, { useRef } from "react";
import reactDOM from "react-dom";
import './hamburguer.css'
import ItensNavegacao from "../itensNavegacao/ItensNavegacao";


const Hamburguer = (props) => {


    const elementoFilho = useRef(null)


    const adicionaEstilo = () => {
        const circulo = document.querySelectorAll('#circulo')
        console.log(circulo[1])
        circulo[1].classList.add('circuloCarrinho')
        const elementoPai = document.querySelector('#hamburguerContainer')
        elementoPai.classList.add('mostraHamburguerContainer')
        elementoFilho.current.classList.add('telaHamburguerCor')
        elementoFilho.current.classList.add('mostraDiv')
        const itens = document.querySelectorAll('.itemNav')
        itens.forEach(item => item.classList.add('itemNavEstilo'))
        

    }

    const removeEstilo = () => {
        const elementoPai = document.querySelector('#hamburguerContainer')
        elementoPai.classList.remove('mostraHamburguerContainer')
        elementoFilho.current.classList.remove('telaHamburguerCor')
        elementoFilho.current.classList.remove('mostraDiv')
        const itens = document.querySelectorAll('.itemNav')
        itens.forEach(item => item.classList.remove('itemNavEstilo'))
        itens.forEach(item => item.classList.remove('carrinhoHamburguer'))
    }

    return (
        <>
            <i className="fas fa-bars fa-2x" onClick={adicionaEstilo}></i>
            {reactDOM.createPortal(
            <div ref={elementoFilho} className="telaHamburguer">
                <i className="fas fa-times-circle fa-3x" onClick={removeEstilo}></i>
                <div className="itensNavegacaoHamburguer">
                    <ItensNavegacao
                        quantidadeItensCarrinho={props.quantidadeItensCarrinho}
                        removeEstilo={removeEstilo} />
                </div>
                
            </div>, document.querySelector('#hamburguerContainer')
        )}

        </>
    )
}

export default Hamburguer