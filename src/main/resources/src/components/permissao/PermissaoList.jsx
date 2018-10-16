import React from 'react'

import DefaultList from '../templates/DefaultList'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getList, prepareEditar, remove, prepareInsert} from './permissaoActions'
import {Column} from "primereact/column";

class PermissaoList extends React.Component{

    componentWillMount(){
        this.props.getList();
    }

    render(){
        let permissoes = this.props.permissoes || [];

        let cols = [
            {field: 'descricao', header: 'Descrição'},
            {field: 'label', header: 'Label'}
        ];

        return (
            <DefaultList prepareInsert={this.props.prepareInsert}
                         list={permissoes}
                         prepareEditar={this.props.prepareEditar}
                         columns={cols} >
            </DefaultList>
        )
    }
}

const mapStateToProps = state => ({ permissoes: state.permissoes.permissoesList})
const mapDispatchToProps = dispatch => bindActionCreators({getList, prepareEditar, remove, prepareInsert}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (PermissaoList)