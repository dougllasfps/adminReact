import React from 'react'
import {UsuarioContext} from './Usuario'
import DefaultListPage from '../../templates/DefaultListPage'
import {InputText} from 'primereact/inputtext'

import {handleChange} from '../../../components/util/ComponentUtils'

export default class UsuarioList extends React.Component{

    render(){

        let cols = [
            {field: 'id', header : 'Código'},
            {field: 'nome', header : 'Nome'},
            {field: 'login', header : 'login'},
            {field: 'email', header : 'Email'}
        ]

        return(
            <UsuarioContext.Consumer>
                {context => (
                    <Page {...context} cols={cols} />
                )}
            </UsuarioContext.Consumer>
        )
    }
}

class Page extends React.Component{
    render(){
        let props = this.props
        return(
            <DefaultListPage  icon="pi pi-user"
                            pageTitle=" Usuários"
                            prepareInsert={props.prepareInsert}
                            prepareEditar={props.prepareEditar}
                            findAction={() => props.find()}
                            remove={props.remove}
                            list={props.state.list}
                            columns={props.cols}>
    
                            <div className="p-grid">
                                <div className="p-md-6">
                                    <InputText id="inputNome" 
                                            placeholder="Nome" 
                                            name="nome" 
                                            onChange={ (e) =>  handleChange(e, this) } />
                                </div>
                                <div className="p-md-6">
                                    <InputText id="inputLogin" 
                                            placeholder="Login" 
                                            name="login" 
                                            onChange={ (e) =>  handleChange(e, this) } />
                                </div>
                                <div className="p-md-6">
                                    <InputText id="inputEmail" 
                                            placeholder="Email" 
                                            name="email" 
                                            onChange={ (e) =>  handleChange(e, this) } />
                                </div>
                            </div>
    
                </DefaultListPage>
        )
    }   
}
