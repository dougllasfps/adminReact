import React from 'react'

import {InputText} from "primereact/inputtext";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DefaultListPage from '../../templates/DefaultListPage'
import  {handleChange} from '../../../components/util/ComponentUtils'

import { getList, prepareEditar, remove, prepareInsert, find } from './moduloActions'

class ModuloList extends React.Component{

    state = {
        descricao: '',
        label: ''
    };

    componentWillMount(){
        this.props.getList()
    }

    render(){
        let list = this.props.list || [];

        let cols = [
            {field: 'id', header : 'Código'},
            {field: 'descricao', header: 'Descrição'},
            {field: 'label', header: 'Label'}
        ];

        let {descricao,label} = this.state;

        let filtro = {descricao,label}

        return (

            <DefaultListPage
                         icon="pi pi-th-large"
                         pageTitle=" Módulos"
                         prepareInsert={this.props.prepareInsert}
                         prepareEditar={this.props.prepareEditar}
                         findAction={() => this.props.find(filtro)}
                         remove={this.props.remove}
                         list={list}
                         columns={cols} >

                <div className="p-grid">
                    <div className="p-md-6">
                        <InputText id="inputDesc" 
                                   placeholder="Descrição" 
                                   name="descricao" 
                                   onChange={ (e) =>  handleChange(e, this) } />
                    </div>

                    <div className="p-md-6">
                        <InputText id="inputLabel" 
                                   placeholder="Label" 
                                   name="label" 
                                   onChange={ (e) =>  handleChange(e, this) } />
                    </div>
                </div>

            </DefaultListPage>

        )
    }
}

const mapStateToProps = state => ({ list: state.modulos.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, prepareEditar, remove, prepareInsert, find}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (ModuloList)