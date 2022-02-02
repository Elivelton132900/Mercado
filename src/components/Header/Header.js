import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './header.css'
import './responsive.css'
import '../Hamburguer/Hamburguer.js'
import ItensNavegacao from "../../itensNavegacao/ItensNavegacao";
import Hamburguer from "../Hamburguer/Hamburguer.js";

class Header extends React.Component {

    render() {
        return (
            <header className="headerContainer">
                <div className="wrapHeader">
                    
                    <h1><Link to='/'>Mercado</Link></h1>
                    <nav className="navegacao">
                        <div className="containerHamburguer">
                            <Hamburguer quantidadeItensCarrinho={this.props.quantidadeItensCarrinho} />
                            
                        </div>
                        <ItensNavegacao quantidadeItensCarrinho={this.props.quantidadeItensCarrinho} />
                    </nav>
                </div>

            </header>
        )
    }
}

const mapStateToProps = state => {
    return { quantidadeItensCarrinho: state.carrinhoReducer.length }
}

export default connect(mapStateToProps)(Header)