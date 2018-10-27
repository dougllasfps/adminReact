import React from 'react'
import {Field} from 'react-final-form'
import {InputText} from 'primereact/inputtext';
import If from '../../../components/If'

import DefaultFormPage from '../../templates/DefaultFormPage'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel, submit} from './moduloActions'

const NEW_ENTITY = {descricao:'', label: ''}


class ModuloForm extends React.Component{

    render(){
        const entity = this.props.entity || NEW_ENTITY

        let submitLabel = entity.id ? 'Atualizar' : 'Salvar';
        let pageTitle = entity.id ? 'Atualização de Modulo' : 'Cadastro de Modulo';

        return (
            <DefaultFormPage
                icon="pi pi-th-large"
                entity={entity}
                handleSubmit={this.props.submit}
                handleCancel={this.props.cancel}
                pageTitle={pageTitle}
                submitLabel={submitLabel} >

                
                <If test={entity.id}>
                    <div className="p-grid">
                        <div className="p-md-12">
                            <label htmlFor="inputCodigo">Código:</label>
                            <InputText id="inputCodigo" 
                                   name="id" 
                                   value={entity.id}
                                   disabled={true}
                                   className="p-inputtext p-component disabled"/>
                        </div>
                    </div>
                </If>
                <div className="p-grid">
                    <div className="p-md-6">
                        <label htmlFor="inputDesc">Descrição: *</label>
                        <Field id="inputDesc" 
                               component="input" 
                               name="descricao" 
                               className="p-inputtext p-component"/>
                    </div>
                    <div className="p-md-6">
                        <label htmlFor="inputLabel">Label: *</label>
                        <Field id="inputLabel"  
                               component="input" 
                               name="label" 
                               className="p-inputtext p-component"/>
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