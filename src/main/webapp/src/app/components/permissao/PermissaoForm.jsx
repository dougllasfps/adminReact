import React from 'react'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

import DefaultFormPage from '../../templates/DefaultFormPage'
import ComponentUtils, {handleChange} from '../../../components/util/ComponentUtils'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {cancel} from './permissaoActions'
import {getList as listaModulos} from '../modulo/moduloActions'

class PermissaoForm extends React.Component{

    state = {
        descricao : '',
        label: ''
    }
    
    render(){

        const {descricao,label} = this.state;
        const entity = {descricao,label}

        return (
            <DefaultFormPage
                handleSubmit={(e) => this.props.handleSubmit(e, entity)}
                handleCancel={this.props.cancel}
                pageTitle={this.props.pageTitle}
                submitLabel={this.props.submitLabel} >

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

const mapDispatchToProps = dispatch => bindActionCreators ( {cancel, listaModulos}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps) (PermissaoForm)