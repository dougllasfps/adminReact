import React from 'react'
import UsuarioList from './UsuarioList'
import GenericService from '../../api/generic/GenericService'

export const UsuarioContext = React.createContext()
const baseUrl = `${process.env.REACT_APP_BASE_SERVICE_URL}/api/usuarios`

export default class Usuario extends React.Component {

    constructor(props){
        super(props)
        this.service = new GenericService({baseUrl})
    }

    emptyEntity = {
        nome: '',
        login: '',
        email: '',
        grupos: []
    }

    state = {
        entity: this.emptyEntity,
        renderForm: false,
        list: []
    }    

    renderPage = () => {
        if(this.state.renderForm === true){
            return (<UsuarioList />)
        }else{
            return (<UsuarioList />)
        }
    }

    prepareInsert = () => {
        this.setState({...this.state, entity: this.emptyEntity})
    }

    prepareEditar = () => {

    }

    listarTodos = () => {
        this.service.findAll()
                .then( resp => {
                    this.setState({...this.state, list: resp.data})
                })
    }

    find = (entitySearch) => {

    }

    remove = () =>{

    }

    componentDidMount(){
        this.listarTodos()
    }

    render(){
        return(
            <UsuarioContext.Provider value={{
                state: this.state,
                prepareInsert: this.prepareInsert,
                prepareEditar: this.prepareEditar,
                find: this.find,
                remove: this.remove
            }}>
                {this.renderPage()}
            </UsuarioContext.Provider>
        )
    }
}
