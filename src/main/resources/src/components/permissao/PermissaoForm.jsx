import React from 'react'
import {Field, reduxForm} from 'redux-form'

import DefaultForm from '../../components/templates/DefaultForm'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel} from './permissaoActions'

import {update_mode, insert_mode} from '../../main/constants/constants'


class PermissaoForm extends React.Component{

    render(){

        let pageMode = this.props.pageMode || insert_mode;
        let submitLabel = pageMode === update_mode ? 'Atualizar' : 'Salvar';
        let pageTitle = pageMode === update_mode ? 'Atualização de Permissão' : 'Cadastro de Permissão';

        return (
            <DefaultForm handleCancel={() => this.props.cancel()} pageTitle={pageTitle} submitLabel={submitLabel} handleSubmit={this.props.handleSubmit}>
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
            </DefaultForm>
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