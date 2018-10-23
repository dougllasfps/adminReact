import React from 'react'

import DefaultFormPage from '../../templates/DefaultFormPage'
import  {handleChange} from '../../../components/util/ComponentUtils'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel, submit} from './permissaoActions'

const NEW_ENTITY = {descricao:'', label: ''}

class PermissaoForm extends React.Component{
    
    render(){
        const entity = this.props.entity || NEW_ENTITY

        let submitLabel = entity.id ? 'Atualizar' : 'Salvar';
        let pageTitle   = entity.id ? 'Atualização de Modulo' : 'Cadastro de Modulo';

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
                        <input type="text" id="inputDesc" name="descricao" className="p-inputtext p-component" onChange={(e) => handleChange(e, this)} />
                    </div>
                    <div className="p-md-6">
                        <label htmlFor="inputLabel">Label: *</label>
                        <input type="text" id="inputLabel" name="label" className="p-inputtext p-component" onChange={(e) => handleChange(e, this)}/>
                    </div>
                </div>

            </DefaultFormPage>
        )
    }
}

const mapStateToProps = state => ({
    entity: state.permissoes.entity
})

const mapDispatchToProps = dispatch => bindActionCreators ( {cancel, submit}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (PermissaoForm)