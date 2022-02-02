import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { mostrarItens, carrinho } from "../../actions";
import './mostrarItens.css'
import './responsive.css'

class MostrarItens extends React.Component {

    componentDidMount() {
        this.props.mostrarItens()
    }

    renderizaItens() {
        if (Object.keys(Object.values(this.props.itens)).length === 0) {
            return <div className="containerItensWarning"> <h3>Nenhum item disponível,</h3> <Link to='/criaritem'><span className="span">crie um!</span></Link> </div>
        } else {
            return (
                Object.values(this.props.itens).map((elemento, index) => (
                    <section key={index} className={`containerItens`}>
                        <div className="imagem">
                            <img alt='imagem' src={elemento.url_imagem} />
                        </div>
                        <div className="item">
                            <div className="nomeDescricaoContainer">
                                <Link to={`/item/${elemento.id}`}>
                                    <h2 className="itemTermo">{`${elemento.nomeItem}, `}
                                        <span className="preco">R$  {elemento.valorItem}</span>
                                    </h2>
                                </Link>
                                <p className="descricao">{elemento.descricaoItem}</p>
                            </div>
                        </div>
                        <div className="botoesItens">
                                <button onClick={() => this.props.carrinho(elemento.id)} >Comprar</button>
                            {this.botoesAdmin(elemento.userId, elemento.id)}
                        </div>
                    </section>
                ))
            )
        }
    }

    botoesAdmin(userIdElemento, id) {
        if (userIdElemento === this.props.idUsuarioLogado) {
            return (
                <>
                    <button><Link to={`/editaritem/${id}`}>Editar Item</Link></button>
                    <button><Link to={`/deletaritem/${id}`} >Excluir Item</Link></button>
                </>
            )
        }
    }

    render() {
        return <div className="containerMaster">{this.renderizaItens()}</div>
    }
}

const mapStateToProps = state => {
    return {
        itens: state.itensReducer,
        idUsuarioLogado: state.googleAuthReducer.userId
    }
}

export default connect(mapStateToProps, { mostrarItens, carrinho })(MostrarItens)