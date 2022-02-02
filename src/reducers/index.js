import { combineReducers } from "redux";
import carrinhoReducer from "./carrinhoReducer";
import googleAuthReducer from "./googleAuthReducer";
import itensReducer from "./itensReducer";

export default combineReducers({
    googleAuthReducer: googleAuthReducer,
    itensReducer: itensReducer,
    carrinhoReducer: carrinhoReducer
})