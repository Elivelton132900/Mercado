import React from "react";
import { Router, Route, Switch } from 'react-router-dom'
import './app.css'
import history from "../../history";
import Header from "../Header/Header";
import CriarItem from "../CriarItem/CriarItem";
import MostrarItens from "../MostrarItens/MostrarItens";
import DeletarItem from "../DeletarItem/DeletarItem";
import MostrarItem from '../mostrarItem/MostrarItem'
import Carrinho from '../ListaCarrinho/ListaCarrinho'
import EditarItem from "../EditarItem/EditarItem";

const App = () => {

    return (

        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={MostrarItens} />
                    <Route path="/criaritem" component={CriarItem} />
                    <Route path="/deletaritem/:id" component={DeletarItem} />
                    <Route path="/item/:id" component={MostrarItem} />
                    <Route path='/carrinho' component={Carrinho} />
                    <Route path="/editaritem/:id" component={EditarItem} />
                </Switch>
            </div>

        </Router>

    )

}

export default App