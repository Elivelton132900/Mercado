import React from "react";
import { connect } from "react-redux";
import { mostraItem, mostrarItens, carrinho } from "../../actions";
import './mostrarItem.css'
import './responsive.css'

class MostrarItem extends React.Component {

    componentDidMount() {
        this.props.mostraItem(this.props.match.params.id)
    }

    renderizaInformacoes() {
        if ((Object.keys(Object.values(this.props.item)).length === 0)) {
            return (
                <div> carregando </div>
            )
        } else {
            let array = []
            array.push(this.props.item)
            return array.map(el => {
                return (
                    <div key={el.id} className="containerItem">
                        <div className="itemIndividual">
                            <div className="imagemGrande">
                                <img src={el.url_imagem_media} alt="imagem" />
                            </div>
                            <h2>{el.nomeItem}</h2>
                            <div className="infoCriacao">
                                <p>Item criado por <span className="donoItem">{el.nomeCompleto}</span></p>
                                <p>{el.descricaoItem}</p>
                            </div>
                            <div className="precoContainer">
                                <h3 className="precoHeader">Preço desse item: <span className="precoSpan">R$ {el.valorItem}</span></h3>
                            </div>
                            <div className="adicionarAoCarrinho">
                                <div className="comprarButton" onClick={() => this.props.carrinho(el.id)}>
                                    <i className="fas fa-shopping-cart fa-2x"></i>
                                    Comprar
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return this.renderizaInformacoes()
    }
}

const mapStateToProps = state => {
    return { item: state.itensReducer }
}

export default connect(mapStateToProps, { mostraItem, mostrarItens, carrinho })(MostrarItem)