import React from 'react'

import {Button} from 'primereact/button';
import {InputText} from "primereact/inputtext";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import DefaultList from '../templates/DefaultList'

import { getList, prepareEditar, remove, prepareInsert, find } from './permissaoActions'

class PermissaoList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            descricao: '',
            label: ''
        };

        this.actionButtons = this.actionButtons.bind(this);
        this.showDelete = this.showDelete.bind(this);
        this.hideDelete = this.hideDelete.bind(this);
        this.prepareDelete = this.prepareDelete.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    componentWillMount(){
        this.props.getList()
    }

    actionButtons(rowData, column) {
        return (
            <div>
                <Button type="button" icon="pi pi-pencil" className="p-button-secondary" onClick={() => this.props.prepareEditar(rowData)}  />
                <Button type="button" icon="pi pi-trash"  className="p-button-danger" onClick={() => this.prepareDelete(rowData) } />
            </div>
        )
    }

    prepareDelete(rowData){
        this.setState({...this.state, permissaoSelecionada:rowData.id })
        this.showDelete()
    }

    showDelete(event) {
        this.setState({confirmDelete: true});
    }

    confirmDelete(){
        this.props.remove(this.state.permissaoSelecionada)
        this.hideDelete()
    }

    hideDelete(event) {
        this.setState({confirmDelete: false});
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

            <DefaultList prepareInsert={this.props.prepareInsert}
                         prepareEditar={this.props.prepareEditar}
                         findAction={() =>this.props.find(filtro)}
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

            </DefaultList>

        )
    }
}

const mapStateToProps = state => ({ permissoes: state.permissoes.permissoesList})
const mapDispatchToProps = dispatch => bindActionCreators({getList, prepareEditar, remove, prepareInsert, find}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (PermissaoList)