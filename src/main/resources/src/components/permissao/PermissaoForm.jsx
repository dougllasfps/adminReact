import React from 'react'
import {InputText} from "primereact/inputtext";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Button} from "primereact/button";
import {cancel} from './permissaoActions'

class PermissaoForm extends React.Component{
    render(){
        let entity = this.props.entity

        return (
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-lg-12">
                    <div className="card card-w-title">
                        <h1>Cadastro de Permissão</h1>
                        <div className="p-grid">
                            <div className="p-md-6">
                                <InputText value={entity.descricao} placeholder="Descrição" />
                            </div>
                            <div className="p-md-6">
                                <InputText value={entity.label} placeholder="Label"/>
                            </div>
                            <div className="p-md-2">
                                <Button label="Atualizar" className="p-button-secondary" />
                            </div>
                            <div className="p-md-2">
                                <Button label="Cancelar" className="p-button-danger" onClick={() => this.props.cancel()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ entity: state.permissoes.permissaoEntity})
const mapDispatchToProps = dispatch => bindActionCreators ( {cancel}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (PermissaoForm)