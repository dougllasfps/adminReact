import React from 'react'
import {Field, reduxForm} from 'redux-form'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button} from "primereact/button";
import {cancel} from './permissaoActions'

import {update_mode, insert_mode} from '../../main/constants/constants'


class PermissaoForm extends React.Component{

    render(){

        let pageMode = this.props.pageMode || insert_mode;
        let submitLabel = pageMode === update_mode ? 'Atualizar' : 'Salvar';
        let pageTitle = pageMode === update_mode ? 'Atualização de Permissão' : 'Cadastro de Permissão';

        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field component="input" type="hidden" name="id" />
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-lg-12">
                        <div className="card card-w-title">
                            <h1>{pageTitle}</h1>
                            <br />
                            <div className="p-grid">
                                <div className="p-md-6">
                                    <span className="p-float-label">
                                        <Field id="inputDesc" component="input" name="descricao" className="p-inputtext p-component"/>
                                        <label htmlFor="inputDesc">Descrição</label>
                                    </span>
                                </div>
                                <div className="p-md-6">
                                    <span className="p-float-label">
                                        <Field id="inputLabel"  component="input" name="label"  className="p-inputtext p-component"/>
                                        <label htmlFor="inputLabel">Label</label>
                                    </span>
                                </div>
                                <div className="p-md-2">
                                    <Field type="submit" component="button" name="submitButton" className="p-button p-component p-button-secondary p-button-text-only" >
                                        <span className="p-button-text p-c">{submitLabel}</span>
                                    </Field>
                                </div>
                                <div className="p-md-2">
                                    <Button label="Cancelar" className="p-button-danger" onClick={() => this.props.cancel()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

const reduxFormConfig = {form: 'permissoesForm', destroyOnUnmount: false};

PermissaoForm = reduxForm(reduxFormConfig)(PermissaoForm);

const mapStateToProps = state => ({
    pageMode: state.permissoes.pageMode
})

const mapDispatchToProps = dispatch => bindActionCreators ( {cancel}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (PermissaoForm)