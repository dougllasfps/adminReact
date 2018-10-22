import React from 'react'
import {Field} from 'react-final-form'

import DefaultFormPage from '../../templates/DefaultFormPage'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel, submit} from './moduloActions'

const NEW_ENTITY = {descricao:'', label: ''}


class ModuloForm extends React.Component{

    handleSubmit = (modulo) => {
        this.props.submit(modulo)
    }

    render(){
        const entity = this.props.entity || NEW_ENTITY

        let submitLabel = entity.id ? 'Atualizar' : 'Salvar';
        let pageTitle = entity.id ? 'Atualização de Modulo' : 'Cadastro de Modulo';

        return (
            <DefaultFormPage
                entity={entity}
                handleSubmit={this.handleSubmit}
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


const mapStateToProps = state => ({
    entity: state.modulos.entity
})

const mapDispatchToProps = dispatch => bindActionCreators ( {cancel, submit}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (ModuloForm)