/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Form, Field } from "react-final-form";
import './formulario.css'

const Formulario = (props) => {

    const renderInput = ({ input, label, meta }) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div className="error">{meta.error && meta.touched && <span>{meta.error}</span>}</div>
            </div>
        );
    };

    const onSubmit = (formValues) => {
        props.onSubmit(formValues);
    };

    const required = (value) => (value ? undefined : 'Campo obrigatório')
    const mustBeNumber = (value) => (isNaN(value) ? "Insira apenas números" : undefined)
    const minValue = (min) => (value) => isNaN(value) || value >= min ? undefined : `O valor deve ser maior que ${min}`
    const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

    return (
        <Form
            initialValues={props.initialValues}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="formulario">
                    <div className="wrapSecao">
                        <label>Nome do item</label>
                        <Field
                            validate={required}
                            name="nomeItem"
                            component={renderInput}
                            type="text"
                            placeholder="Insira o nome do item"
                        ></Field>
                    </div>
                    <div className="wrapSecao">
                        <label>Descrição do item</label>
                        <Field
                            validate={required}
                            name="descricaoItem"
                            component={renderInput}
                            type="text"
                            placeholder="Insira uma descrição para este item"
                        />
                    </div>
                        <div className="wrapSecao">
                            <label>Valor do Item R$</label>
                            <Field
                                validate={composeValidators(required, mustBeNumber,minValue(1))}
                                name="valorItem"
                                component={renderInput}
                                type="number"
                                placeholder="R$"
                            />
                        </div>
                        <div className="containerSubmit">
                            <button>Submit</button>
                        </div>
                </form>
            )}
        />
    )
}

export default Formulario