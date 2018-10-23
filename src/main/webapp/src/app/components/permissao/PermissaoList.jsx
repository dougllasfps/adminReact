import React from 'react'

import {InputText} from "primereact/inputtext";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DefaultListPage from '../../templates/DefaultListPage'
import {handleChange} from '../../../components/util/ComponentUtils'

import { getList,remove,prepareEditar,prepareInsert,find } from './permissaoActions'


class PermissaoList extends React.Component{

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
            {field: 'descricao', header: 'Descrição'},
            {field: 'label', header: 'Label'}
        ];

        let {descricao,label} = this.state;

        let filtro = {descricao,label}

        return (

            <DefaultListPage
                         pageTitle="Permissões"
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
                                   onChange={ (e) => handleChange(e, this) } />
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
const mapStateToProps = state => ({
    list: state.permissoes.list
})

const mapDispatchToProps = dispatch => bindActionCreators({getList,prepareInsert,prepareEditar,remove, find}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (PermissaoList)