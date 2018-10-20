import React from 'react'

import {InputText} from "primereact/inputtext";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DefaultListPage from '../templates/DefaultListPage'

import { getList, prepareEditar, remove, prepareInsert, find } from './permissaoActions'

class PermissaoList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            descricao: '',
            label: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        this.props.getList()
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
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
                        <InputText id="inputDesc" placeholder="Descrição" name="descricao" onChange={this.handleInputChange.bind(this)} />
                    </div>

                    <div className="p-md-6">
                        <InputText id="inputLabel" placeholder="Label" name="label" onChange={this.handleInputChange.bind(this)} />
                    </div>
                </div>

            </DefaultListPage>

        )
    }
}

const mapStateToProps = state => ({ permissoes: state.permissoes.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, prepareEditar, remove, prepareInsert, find}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (PermissaoList)