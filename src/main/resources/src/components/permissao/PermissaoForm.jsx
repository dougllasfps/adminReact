import React from 'react'
import {Field, reduxForm} from 'redux-form'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button} from "primereact/button";
import {cancel} from './permissaoActions'

import {update_mode, insert_mode} from '../../main/constants/constants'


class PermissaoForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){

        let pageMode = this.props.pageMode || insert_mode;
        let submitLabel = pageMode === update_mode ? 'Atualizar' : 'Salvar';

        return (
            <form role="form" onSubmit={this.props.handleSubmit}>
                <Field component="input" type="hidden" name="id" />
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-lg-12">
                        <div className="card card-w-title">
                            <h1>Cadastro de Permissão </h1>
                            <div className="p-grid">
                                <div className="p-md-6">
                                    <Field  component="input" name="descricao" placeholder="Descrição" className="p-inputtext p-component"/>
                                </div>
                                <div className="p-md-6">
                                    <Field  component="input" name="label"  placeholder="Label" className="p-inputtext p-component"/>
                                </div>
                                <div className="p-md-2">
                                    <Field type="submit" component={Button} label={submitLabel} className="p-button-secondary" />
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