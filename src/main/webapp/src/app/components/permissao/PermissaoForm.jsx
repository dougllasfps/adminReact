import React from 'react'
import {Field} from 'react-final-form'
import {PickList} from 'primereact/picklist';


import DefaultFormPage from '../../templates/DefaultFormPage'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel, submit,setModulos} from './permissaoActions'
import {getListPromisse} from '../modulo/moduloActions'

const NEW_ENTITY = {descricao:'', label: '', modulos : []}

class PermissaoForm extends React.Component {

    state = {
        modulosDisponiveis: [],
        modulosSelecionados: []
    }

    componentWillMount(){
        let self = this;
        getListPromisse()
            .then( resp => {
                self.setState({...this.state, modulosDisponiveis: resp.data.data})
            })
    }

    moduloTemplate = (modulo) => {
        return(
            <div className="p-clearfix">
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{modulo.descricao}</div>
            </div>
        )
    }

    onSubmit = (permissao) => {
        permissao = {...permissao, modulos: this.state.modulosSelecionados}
        this.props.submit(permissao)
    }
    
    render(){
        const entity = this.props.entity || NEW_ENTITY
        const modulosAdicionados = this.props.modulos || []

        console.log(` adicionados: ${modulosAdicionados}`)

        if(modulosAdicionados){
            modulosAdicionados.forEach( m => {
                this.state.modulosDisponiveis.pop(m)
            })

            this.state.modulosSelecionados = modulosAdicionados
        }
       
        console.log(` disp: ${this.state.modulosDisponiveis}`)
        console.log(` add: ${this.state.modulosSelecionados}`)

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
                        <PickList   source={this.state.modulosDisponiveis} 
                                    target={this.state.modulosSelecionados} 
                                    itemTemplate={this.moduloTemplate}  
                                    sourceHeader="Disponíveis" targetHeader="Selecionados"
                                    onChange={(e) => this.props.setModulos(e.target) } 
                                    responsive={true} />
                    </div>
                </div>

            </DefaultFormPage>
        )
    }
}

const mapStateToProps = state => ({
    entity: state.permissoes.entity,
    modulos: state.permissoes.modulosAdicionados
})

const mapDispatchToProps = dispatch => bindActionCreators ( {cancel, submit,setModulos}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (PermissaoForm)