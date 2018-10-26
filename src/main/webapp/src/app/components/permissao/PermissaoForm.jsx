import React from 'react'
import {Field} from 'react-final-form'
import {PickList} from 'primereact/picklist';

import DefaultFormPage from '../../templates/DefaultFormPage'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel, submit,setModulos} from './permissaoActions'

const NEW_ENTITY = {descricao:'', label: '', modulos : []}

class PermissaoForm extends React.Component {    

    onSubmit = (permissao) => {
        permissao = {...permissao, modulos: this.props.modulosAdicionados}
        this.props.submit(permissao)
    }

    onModulosChange = (event) => {
        const listas = { adicionados : event.target, disponiveis: event.source }
        this.props.setModulos(listas)
    }

    moduloTemplate = (modulo) => {
        return(
            <div className="p-clearfix">
                <div key={modulo.id} style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>
                    {modulo.descricao}
                </div>
            </div>
        )
    }
    
    render(){
        const entity = this.props.entity || NEW_ENTITY
        let submitLabel = entity.id ? 'Atualizar' : 'Salvar';
        let pageTitle   = entity.id ? 'Atualização de Permissão' : 'Cadastro de Permissão';

        return (
            <DefaultFormPage
                entity={entity}
                handleSubmit={this.onSubmit}
                handleCancel={this.props.cancel}
                pageTitle={pageTitle}
                submitLabel={submitLabel} >

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

                <br />

                <div className="p-grid">
                    <div className="p-md-12">
                        <PickList   showSourceControls={false}
                                    showTargetControls={false}                                    
                                    source={this.props.modulosDisponiveis} 
                                    target={this.props.modulosAdicionados} 
                                    itemTemplate={this.moduloTemplate}  
                                    sourceHeader="Disponíveis" 
                                    targetHeader="Selecionados"
                                    onChange={ (e) => this.onModulosChange(e) } 
                                    responsive={true} />
                    </div>
                </div>

            </DefaultFormPage>
        )
    }
}

const mapStateToProps = state => ({
    entity: state.permissoes.entity,
    modulosAdicionados: state.permissoes.modulosAdicionados,
    modulosDisponiveis: state.permissoes.modulosDisponiveis
})

const mapDispatchToProps = dispatch => bindActionCreators ( {cancel, submit,setModulos}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (PermissaoForm)