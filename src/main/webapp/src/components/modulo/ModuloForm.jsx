import React from 'react'
import {Field, reduxForm} from 'redux-form'

import DefaultFormPage from '../../components/templates/DefaultFormPage'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel} from './moduloActions'

import {update_mode, insert_mode} from '../../main/constants/constants'


class ModuloForm extends React.Component{

    render(){
        let pageMode = this.props.pageMode || insert_mode;
        let submitLabel = pageMode === update_mode ? 'Atualizar' : 'Salvar';
        let pageTitle = pageMode === update_mode ? 'Atualização de Modulo' : 'Cadastro de Modulo';

        return (
            <DefaultFormPage
                handleSubmit={this.props.handleSubmit}
                handleCancel={this.props.cancel}
                pageTitle={pageTitle}
                submitLabel={submitLabel} >
                <div className="p-grid">
                    <div className="p-md-6">
                        <label htmlFor="inputDesc">Descrição: *</label>
                        <Field id="inputDesc" component="input" name="descricao" className="p-inputtext p-component"/>
                    </div>
                    <div className="p-md-6">
                        <label htmlFor="inputLabel">Label: *</label>
                        <Field id="inputLabel"  component="input" name="label" className="p-inputtext p-component"/>
                    </div>
                </div>

            </DefaultFormPage>
        )
    }
}

const reduxFormConfig = {form: 'modulosForm', destroyOnUnmount: false};

ModuloForm = reduxForm(reduxFormConfig)(ModuloForm);

const mapStateToProps = state => ({
    pageMode: state.modulos.pageMode
})

const mapDispatchToProps = dispatch => bindActionCreators ( {cancel}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (ModuloForm)