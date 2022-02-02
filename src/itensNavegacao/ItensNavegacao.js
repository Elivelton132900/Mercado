import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth";
import './itensNavegacao.css'

const ItensNavegacao = (props) => {


    return (
        <>
            <div className="itemNav" onClick={() => props.removeEstilo()}>
                <GoogleAuth />
            </div>
            <div className="itemNav">
                <Link onClick={props.removeEstilo} to="/criaritem" className="criarItem criarItemHamburguer">Criar Item</Link>
            </div>
            <div className="itemNav">
                <Link className="linkCarrinho" onClick={props.removeEstilo} to="/carrinho">
                    <div id="circulo" className="circulo">
                        <span className="quantidade">
                            {props.quantidadeItensCarrinho ? props.quantidadeItensCarrinho : 0}
                        </span>
                    </div>
                    <i className="fas fa-shopping-cart fa-2x ">

                    </i>
                </Link>
            </div>
        </>


    )
}

export default ItensNavegacao