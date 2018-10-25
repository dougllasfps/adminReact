import React from 'react'
import {Field} from 'react-final-form'

import DefaultFormPage from '../../templates/DefaultFormPage'
import  {handleChange} from '../../../components/util/ComponentUtils'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel, submit} from './permissaoActions'
import {getList as listaModulos} from '../modulo/moduloActions'

const NEW_ENTITY = {descricao:'', label: '', modulos : []}

class PermissaoForm extends React.Component {

    componentWillMount(){
        this.props.listaModulos();
    }
    
    render(){
        const entity = this.props.entity || NEW_ENTITY
        const modulos = this.props.modulos || []

        console.log(modulos)

        let submitLabel = entity.id ? 'Atualizar' : 'Salvar';
        let pageTitle   = entity.id ? 'Atualização de Permissão' : 'Cadastro de Permissão';

        return (
            <DefaultFormPage
                entity={entity}
                handleSubmit={this.props.submit}
                handleCancel={this.props.cancel}
                pageTitle={pageTitle}
                submitLabel={submitLabel} >

                <div className="p-grid">
                    <div className="p-md-6">
                        <label htmlFor="inputDesc">Descrição: *</label>
                        <Field component="input" 
                               id="inputDesc" 
                               name="descricao" 
                               className="p-inputtext p-component" 
                               onChange={(e) => handleChange(e, this)} />
                    </div>
                    <div className="p-md-6">
                        <label htmlFor="inputLabel">Label: *</label>
                        <Field component="input" 
                               id="inputLabel" 
                               name="label" 
                               className="p-inputtext p-component" 
                               onChange={(e) => handleChange(e, this)}/>
                    </div>
                </div>

            </DefaultFormPage>
        )
    }
}

const mapStateToProps = state => ({
    entity: state.permissoes.entity,
    modulos: state.modulos.list
})

const mapDispatchToProps = dispatch => bindActionCreators ( {cancel, submit, listaModulos}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (PermissaoForm)