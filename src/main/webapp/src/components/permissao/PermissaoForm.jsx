import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Dropdown} from 'primereact/dropdown';


import DefaultFormPage from '../../components/templates/DefaultFormPage'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel} from './permissaoActions'
import {getList as listaModulos} from '../modulo/moduloActions'

import {update_mode, insert_mode} from '../../main/constants/constants'


class PermissaoForm extends React.Component{

    componentWillMount(){
        this.props.listaModulos();
        console.log('modulos listados')
    }

    render(){
        let pageMode = this.props.pageMode || insert_mode;
        let modulos = this.props.modulos || [];
        console.log(modulos)

        const moduloOptions = modulos.forEach( m => {
            return {name : m.descricao, code: m}
        })

        let submitLabel = pageMode === update_mode ? 'Atualizar' : 'Salvar';
        let pageTitle = pageMode === update_mode ? 'Atualização de Permissão' : 'Cadastro de Permissão';

        return (
            <DefaultFormPage
                handleSubmit={this.props.handleSubmit}
                handleCancel={this.props.cancel}
                pageTitle={pageTitle}
                submitLabel={submitLabel} >

                <div className="p-md-6">
                    <label htmlFor="inputDesc">Descrição: *</label>
                    <Field id="inputDesc" component="input" name="descricao" className="p-inputtext p-component"/>
                </div>
                <div className="p-md-6">
                    <label htmlFor="inputLabel">Label: *</label>
                    <Field id="inputLabel"  component="input" name="label" className="p-inputtext p-component"/>
                </div>
                <div className="p-md-6">
                    <label htmlFor="inputModulo">Modulo: *</label>
                    <Field id="inputLabel"  component={Dropdown} options={moduloOptions} name="modulo" className="p-inputtext p-component"/>
                </div>

            </DefaultFormPage>
        )
    }
}

const reduxFormConfig = {form: 'permissoesForm', destroyOnUnmount: false};

PermissaoForm = reduxForm(reduxFormConfig)(PermissaoForm);

const mapStateToProps = state => ({
    pageMode: state.permissoes.pageMode,
    modulos: state.modulos.list
})

const mapDispatchToProps = dispatch => bindActionCreators ( {cancel, listaModulos}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (PermissaoForm)