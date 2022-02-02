import React from "react";
import { connect } from "react-redux";
import { mostrarItens } from "../../actions";
import Modal from "../Modal/Modal";
import './deletarItem.css';

class DeletarItem extends React.Component {

    componentDidUpdate() {
        this.props.mostrarItens()
    }

    render() {
        return (
            <Modal
                cabecalho='Você tem certeza que deseja excluir esse item?'
                warning='Esse item será permamentemente excluído caso você prossiga com a exclusão'
                idItem={this.props.match.params.id}
            />
        )
    }
}


export default connect(null, { mostrarItens })(DeletarItem)