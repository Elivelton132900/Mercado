import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './listaCarrinho.css'
import { mostraItem, deletarItemCarrinho, deletarTudoCarrinho } from "../../actions";
import './responsive.css'

class Carrinho extends React.Component {

    renderizaItens() {
        let arrayValoresItens = this.props.itensCarrinho.map(el => parseFloat(el.valorItem));
        this.valorTotal = arrayValoresItens.reduce((total, numero) => {
            return total + numero
        }, 0)
        return this.props.itensCarrinho.map((elemento, index) => {
            return (
                <div className='containerImagemCarrinho' key={index}>
                    <div className="imagemItem">
                        <img src={elemento.url_imagem} alt='imagem'></img>
                    </div>
                    <div className="wrapItemCarrinho">
                        <div className="nomeEPrecoCarrinho">
                            <h2 className="cabecalhoItem">
                                <Link to={`/item/${elemento.id}`}>
                                    {`${elemento.nomeItem} R$ ${elemento.valorItem}`}
                                </Link>
                                
                            </h2>
                        </div>
                    </div>
                    <div className="containerBotaoCarrinho">
                        <button onClick={() => this.props.deletarItemCarrinho(index)}>
                            Excluir Item
                        </button>
                    </div>
                </div>
            )
        })
    }


    render() {

        if (this.props.itensCarrinho.length === 0) {
            return <div className="containerCabecalho">
                <h2 className="cabecalhoContainer vazio">Carrinho vazio</h2>
            </div>
        }

        return (
            <div className="containerMasterCarrinho">
                <div className="containerCabecalho">
                    <h2 className="cabecalhoContainer">Carrinho</h2>
                </div>

                {this.renderizaItens()}
                <div className="containerValorTotal">
                    <h2 className="valorTotal">Valor total: <span className="destaque">R${this.valorTotal}</span> </h2>
                    <div className="containerLimpaTudo">
                        <button onClick={() => this.props.deletarTudoCarrinho()} className="botaoLimpar">Limpar carrinho</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { itensCarrinho: Object.values(state.carrinhoReducer) }
}

export default connect(mapStateToProps, { mostraItem, deletarItemCarrinho, deletarTudoCarrinho })(Carrinho)