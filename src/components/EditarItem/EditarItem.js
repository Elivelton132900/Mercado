import React from "react";
import { connect } from "react-redux";
import { mostraItem, editaItem } from '../../actions'
import Formulario from '../Formulario/Formulario'

class EditarItem extends React.Component {

    componentDidMount() {
        this.props.mostraItem(this.props.match.params.id)
        console.log(this.props.item)
    }


    onSubmit = (formValues) => {
        this.props.editaItem(this.props.match.params.id, formValues)
    }

    render() {
        return (
            <div>
                <Formulario
                    initialValues={{ 
                        nomeItem: this.props.item.nomeItem, 
                        descricaoItem: this.props.item.descricaoItem,
                        valorItem: this.props.item.valorItem
                    }}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { item: state.itensReducer }
}

export default connect(mapStateToProps, { mostraItem, editaItem })(EditarItem)