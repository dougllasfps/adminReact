import React from 'react'

import ComponentUtils from '../../../components/util/ComponentUtils'
import PermissaoList from "./PermissaoList";
import PermissaoService from './PermissaoService'

import PermissaoForm from "./PermissaoForm";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { getList, prepareEditar, remove, prepareInsert, find , submit } from './permissaoActions'

class Permissao extends React.Component{

    constructor(props){
        super(props)
        this.state = { pageStatus: ComponentUtils.SEARCH_STATUS }
        this.changePageStatus = this.changePageStatus.bind(this)
        this.prepareEditar = this.prepareEditar.bind(this)

        console.log(props)
    }
    
    changePageStatus(pageStatus){
        this.setState({...this.state, pageStatus: pageStatus})
    }

    prepareEditar(data){
        console.log(data)
        this.changePageStatus(ComponentUtils.UPDATE_STATUS)
        this.props.prepareEditar(data)
    }

    submit(e, entity){
        e.preventDefault();
        this.props.submit(entity)
    }

    render(){
        let pageMode = this.state.pageStatus || ComponentUtils.SEARCH_STATUS;

        console.log('render page status ', ComponentUtils.SEARCH_STATUS)

        if( pageMode === ComponentUtils.SEARCH_STATUS ){
            return (
                <PermissaoList 
                        find={this.props.find} 
                        prepareInsert={ () => this.props.prepareInsert} 
                        prepareEditar={ this.prepareEditar } 
                        remove={this.props.remove}
                />
            )
        }else{
            return (
                <PermissaoForm onSubmit={this.submit} />
            )
        }
    }
}

const mapStateToProps = state => ({
    pageMode: state.permissoes.pageMode,
    permissoes: state.permissoes.list
})
const mapDispatchToProps = dispatch => bindActionCreators({getList, prepareEditar, remove, prepareInsert, find, submit}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Permissao)