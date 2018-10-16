import React from 'react'
import PermissaoList from "./PermissaoList";

import {search_mode} from '../../main/constants/constants'
import PermissaoForm from "./PermissaoForm";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {submit} from './permissaoActions'

class Permissao extends React.Component{

    render(){
        let pageMode = this.props.pageMode || search_mode;
        return (
            <div>
                {pageMode === search_mode ? <PermissaoList /> : <PermissaoForm onSubmit={this.props.submit} />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pageMode: state.permissoes.pageMode
})

const mapDispatchToProps = dispatch => bindActionCreators ( {submit}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps) (Permissao)