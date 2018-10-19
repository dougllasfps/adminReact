import axios from 'axios'
import {showSuccessMessage, showErrorMessage, showWarnMessage} from '../../components/messages/messages'

export function find(requestMapping, query, actionCreator){

    let url = `${requestMapping}/find?${query}`;
    let request = axios.get(url)
        .catch(error => {
            error.response.data.warnings.forEach( w =>{
                showWarnMessage(w)
            })
        })

    return {
        type: actionCreator,
        payload: request
    }

}

export function submit( requestMapping, entity , dispatchAction ){
    let id = entity.id ? entity.id : '';
    let method = id ? 'put' : 'post'
    return dispatch => {
        axios[method](`${requestMapping}/${id}`,entity )
            .then( resp =>{
                showSuccessMessage('Registro salvo com sucesso.')

                if(dispatchAction){
                    dispatch(dispatchAction)
                }

            }).catch( e => {
                e.response.data.errors.forEach(error => {
                    showErrorMessage(error)
                }
            );
        })
    }
}

export function getList(requestMapping, actionCreator){
    let request = axios.get(requestMapping)
    return {
        type: actionCreator,
        payload: request
    }
}

export function remove( requestMapping, id, dispatchAction ){
    return dispatch => {
        axios
            .delete(`${requestMapping}/${id}`)
            .then( resp => {
                showSuccessMessage('Registro removido com sucesso.')
                if(dispatchAction){
                    dispatch(dispatchAction)
                }
            }).catch(e => {
                e.response.data.errors.forEach(error => {
                    showErrorMessage(error)
                }
            );
        })
    }

}