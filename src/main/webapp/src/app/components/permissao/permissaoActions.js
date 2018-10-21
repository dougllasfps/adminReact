import axios from 'axios'
import { showSuccessMessage, showErrorMessage } from '../../../components/messages/messages'
import
{
    find as genericFind,
    submit as genericSubmit,
    getList as genericGetList

} from '../../api/generic/genericActionCreator'

const BASE_URL = `${process.env.REACT_APP_BASE_SERVICE_URL}/api/permissoes`

export const NEW_ENTITY = {descricao:'', label: ''}

export function find( permissao ){
    let query = `descricao=${permissao.descricao}&label=${permissao.label}`;
    return genericFind( BASE_URL, query, 'PERMISSAO_FIND')
}

export function submit(permissao){
    console.log('submiting', permissao)
    return genericSubmit(BASE_URL,permissao )
}

export function getList(){
    return genericGetList(BASE_URL, 'PERMISSAO_ALL')
}

export function remove(id){
    return dispatch => {
        axios
            .delete(`${BASE_URL}/${id}`)
            .then( resp => {
                showSuccessMessage('Registro removido com sucesso.')
                dispatch(getList())
            }).catch(e => {
            e.response.data.errors.forEach(error => {
                    showErrorMessage(error)
                }
            );
        })
    }
}

export function prepareInsert(){
    return [
        toForm(NEW_ENTITY)
    ]
}

export function prepareEditar(permissao){
    // let id = permissao.id;
    // let modulos = axios.get(`${BASE_URL}/${id}/modulos`);
    //
    // console.log(modulos)
    //
    // permissao = {...permissao, modulos: modulos}
    //
    // console.log(permissao)


    return dispatch => {
        axios.get(`${BASE_URL}/${permissao.id}/alldata`)
            .then( resp => {
                let entity = resp.data.data
                dispatch( [
                    toForm(entity),
                ])
            }).catch( e => {
                e.response.data.errors.forEach(error => {
                        showErrorMessage(error)
                    }
                );
            })
    }
}

function toForm(permissao){
    return {
        type: 'PERMISSAO_FORM',
        payload: permissao
    }
}

export function cancel(){

}