import React from 'react'

import {InputText} from "primereact/inputtext";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DefaultListPage from '../../templates/DefaultListPage'
import ComponentUtils, {handleChange} from '../../../components/util/ComponentUtils'

import { getList } from './permissaoActions'


class PermissaoList extends React.Component{

    state = {
        descricao: '',
        label: ''
    };

    componentWillMount(){
        this.props.getList()
    }

    render(){
        let permissoes = this.props.permissoes || [];

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
                         list={permissoes}
                         columns={cols} >

                <div className="p-grid">
                    <div className="p-md-6">
                        <InputText id="inputDesc" placeholder="Descrição" name="descricao" onChange={ (e) => handleChange(e, this) } />
                    </div>

                    <div className="p-md-6">
                        <InputText id="inputLabel" placeholder="Label" name="label" onChange={ (e) =>  handleChange(e, this) } />
                    </div>
                </div>

            </DefaultListPage>

        )
    }
}
const mapStateToProps = state => ({
    permissoes: state.permissoes.list
})

const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (PermissaoList)