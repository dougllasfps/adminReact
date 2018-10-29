import React from 'react'

import ModuloService from './ModuloService'
import ModuloList from './ModuloList'
import ModuloForm from './ModuloForm'
import ComponentUtils from '../../../components/util/ComponentUtils'

export const ModuloContext = React.createContext()

export default class Modulo extends React.Component{

    state = {
        entity: {descricao:'', label: ''},
        entitySearch: {descricao:'', label: ''},
        list: [],
        pageStatus : ComponentUtils.SEARCH_STATUS,
    }

    constructor(props){
        super(props)
        this.service = new ModuloService()
    }

    find = () => {
        let result = this.service.find( {query : `descricao=${this.state.entitySearch.descricao}&label=${this.state.entitySearch.label}`} )
        this.setState({...this.state, list: result})
    }

    prepareInsert = () => {
        let newEntity = this.service.createNewEntity();
        this.setState({...this.state, entity : newEntity, pageStatus: ComponentUtils.INSERT_STATUS })
    }

    prepareEditar = (modulo) => {
        this.setState({...this.state, entity : modulo, pageStatus: ComponentUtils.UPDATE_STATUS })
    }

    delete = (id) =>{
        this.service.delete(id)
    }

    findAll = () => {
        this.service.findAll()
                        .then(resp => {
                            this.setState({...this.state, list: resp.data.data})
                        })        
    }
    
    renderPage = () => {
        if(this.state.pageStatus === ComponentUtils.SEARCH_STATUS){
            return ( <ModuloList /> )
        }else{
            return ( <ModuloForm /> )
        }
    }

    render(){
        return (
            <ModuloContext.Provider value={{
                state : this.state,
                find : this.find,
                prepareInsert : this.prepareInsert,
                prepareEditar: this.prepareEditar,
                delete : this.delete,
                findAll: this.findAll
            }}>
                {this.renderPage(this.state.pageStatus)}
            </ModuloContext.Provider>
        )
    }
}

