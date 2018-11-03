import React from 'react'
import {Field} from 'react-final-form'
import {Panel} from 'primereact/panel';
import {Dropdown} from 'primereact/dropdown';
import {DataTable} from 'primereact/datatable';

import DefaultFormPage from '../../templates/DefaultFormPage'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel, submit,setModulo, setPermissoes, pageMode} from './grupoActions'
import {findByModulo as findPermissoesByModulo} from '../permissao/permissaoActions'
import { Column } from 'primereact/column';

import ComponentUtils from '../../../components/util/ComponentUtils'

const NEW_ENTITY = {descricao:'', label: '', permissoes : []}

class GrupoForm extends React.Component {  

    componentWillUnmount(){
        this.props.pageMode(ComponentUtils.SEARCH_STATUS)
        this.props.setPermissoes([])
    }

    onSubmit = (grupo) => {
        let entity = {...grupo, modulo: this.props.moduloSelecionado, permissoes: this.props.permissoesSelecionadas}
        this.props.submit(entity)
    }

    onModuloSelect = (modulo) => {
        if(modulo){
            this.props.findPermissoesByModulo(modulo.id)
            this.props.setModulo(modulo)
        }
    }

    onPermissaoSelect = (permissoes) => {
        this.props.setPermissoes(permissoes)
    }

    render(){
        const entity = this.props.entity || NEW_ENTITY
        let submitLabel = entity.id ? 'Atualizar' : 'Salvar';
        let pageTitle   = entity.id ? 'Atualização de Grupo' : 'Cadastro de Grupo';

        this.onModuloSelect(this.props.moduloSelecionado)

        const modulosSelect =  entity.modulosDisponiveis ?  entity.modulosDisponiveis.map( m => ({ label: m.descricao , value: m} ) ) : []

        const disableModuloSelect = this.props.permissoesSelecionadas ?  this.props.permissoesSelecionadas.length > 0 : false

        return (
            <DefaultFormPage
                icon="pi pi-users"
                entity={entity}
                handleSubmit={this.onSubmit}
                handleCancel={this.props.cancel}
                pageTitle={pageTitle}
                submitLabel={submitLabel} >

                <div className="p-grid">
                    <div className="p-md-6">
                        <label htmlFor="inputModulo">Módulo: *</label>
                        <Dropdown id="inputModulo" 
                               name="modulo" placeholder="Selecione..."
                               value={this.props.moduloSelecionado}
                               style={{width: '100%'}}
                               disabled={disableModuloSelect}
                               component={Dropdown} options={modulosSelect} 
                               onChange={ e =>{ this.onModuloSelect(e.value) } }/>
                    </div>

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
                        <Panel header="Permissões">
                            <DataTable value={this.props.permissoesModulo} 
                                       onSelectionChange={ e => this.onPermissaoSelect(e.data) }
                                       selection={this.props.permissoesSelecionadas}>
                                <Column selectionMode="multiple" style={{width:'3em'}}/>
                                <Column field="id" header="Código" style={{width:'10em', textAlign: 'center'}}/>
                                <Column field="descricao" header="Descricao" />
                                <Column field="label" header="Label" />
                            </DataTable>
                        </Panel>
                    </div>
                </div>                

            </DefaultFormPage>
        )
    }
}

const mapStateToProps = state => ({
    entity: state.grupos.entity,
    moduloSelecionado: state.grupos.moduloSelecionado,
    permissoesModulo: state.permissoes.permissoesModulo,
    permissoesSelecionadas: state.grupos.permissoesSelecionadas
})

const mapDispatchToProps = dispatch => bindActionCreators ( {cancel, submit,setModulo,findPermissoesByModulo,setPermissoes,pageMode}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (GrupoForm)