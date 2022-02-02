import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { deletaItem } from "../../actions";
import './modal.css'
import history from "../../history";

const Modal = props => {

    useEffect(() => {
        const modalPai = document.querySelector('#modalContainer')
        modalPai.classList.add('mostrar') 
        const elemento = document.querySelector('#modal')
        if (elemento) {
            elemento.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal')) {
                    history.push('/')
                }
            })
        }

        return () => modalPai.classList.remove('mostrar') 

    })

    const renderizaBotoes = () => {
        return (
            <div className="botoes">
                <button onClick={() => history.push('/')} className="cancelar">
                    Cancelar
                </button>
                <button onClick={() => props.deletaItem(props.idItem)} className="excluir">
                     Excluir
                </button>
            </div>
        )
    }

    return ReactDOM.createPortal(
        <div className="modal" id="modal">
            <div className="modalWrap">
                <div className="cabecalhoModal">
                    <h2>{props.cabecalho}</h2>
                </div>
                <div className="corpoCabecalho">
                    <div className="mensagem">
                        {props.warning}
                    </div>
                    {renderizaBotoes()}
                </div>
            </div>

        </div>, document.querySelector('#modalContainer')
    )
}



export default connect(null, { deletaItem })(Modal)