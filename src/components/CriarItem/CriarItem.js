import React from "react";
import { connect } from "react-redux";
import Formulario from "../Formulario/Formulario";
import { criarItem } from '../../actions'

class CriarItem extends React.Component {

    onSubmit = ({nomeItem, descricaoItem, valorItem}) => {
        if (!this.props.logado) {
            window.alert('Para executar essa ação você precisa estar logado')
        } else {
            const infos = {
                termo: nomeItem,
                userId: this.props.userId,
                nomeCompleto: this.props.nomeCompleto,
                nomeItem,
                descricaoItem,
                valorItem
            }
            this.props.criarItem(infos)
        }
    }

    render() {
        return (
            <div>
                <Formulario onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        logado: state.googleAuthReducer.isSignedIn,
        userId: state.googleAuthReducer.userId,
        nomeCompleto: state.googleAuthReducer.nomeCompleto

    }
}

export default connect(mapStateToProps, { criarItem })(CriarItem)