import axios from 'axios'
import {showSuccessMessage, showErrorMessage, showWarnMessage} from '../../../components/messages/messages'

export function find(requestMapping, query, actionCreator){

    let url = `${requestMapping}/find?${query}`;
    return dispatch => {
        axios.get(url)
            .then(resp => {
                dispatch({
                    type: actionCreator,
                    payload: resp.data.data
                })
            })
            .catch(error => {
                let warnings = error.response.data.warnings;

                if(warnings){
                    warnings.forEach(w => {
                        showWarnMessage(w)
                    });
                }

                let errors = error.response.data.errors;

                if(errors){
                    errors.forEach(e => {
                        showErrorMessage(e)
                    })
                }

            })
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
    return dispatch => {
        axios.get(requestMapping)
            .then(resp => {
                dispatch({
                    type: actionCreator,
                    payload: resp.data.data
                })
            })
            .catch(error => {
                let warnings = error.response.data.warnings;

                if(warnings){
                    warnings.forEach(w => {
                        showWarnMessage(w)
                    });
                }

                let errors = error.response.data.errors;

                if(errors){
                    errors.forEach(e => {
                        showErrorMessage(e)
                    })
                }

            })
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