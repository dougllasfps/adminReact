import Api from './Api'

import {showErrorMessage,showSuccessMessage,showWarnMessage} from '../../../components/messages/messages'

export default class GenericService {

    constructor( {baseUrl} ){
        this.api = new Api()
        this.baseUrl = baseUrl
    }

    getApi = () => {
        return this.api;
    }

    onSuccess = (resp, successCallBack) => {
        if(successCallBack){
            successCallBack(resp)
        }else{
            this.msgSuccess('Item salvo com sucesso!')
        }
    }

    onError = (error, errorCallBack) => {
        if(errorCallBack){
            errorCallBack(error)
        }else{
            if(error.data.messages){
                error.data.messages.array.forEach(e => {
                    this.msgErro(e)
                });
            }
        }
    }

    save = ( {entity, successCallBack, errorCallBack} ) => {
        this.api.post( this.baseUrl, entity, this.onSuccess(successCallBack) , this.onError(errorCallBack))
    }

    update = ( {entity, successCallBack, errorCallBack} ) => {
        this.api.put( `${this.baseUrl}/${entity.id}`, entity, this.onSuccess(successCallBack) , this.onError(errorCallBack))
    }

    delete = ( {id, successCallBack, errorCallBack} ) => {
        this.api.delete(`${this.baseUrl}/${id}`, this.onSuccess(successCallBack), this.onError(errorCallBack))
    }

    findAll = ()=> {
        return this.api.get(this.baseUrl);
    }

    find = ({query, successCallBack, errorCallBack}) => {
        return this.api.get(`${this.baseUrl}?${query}`, this.onSuccess(successCallBack), this.onError(errorCallBack))
    }

    msgErro = (message) => {
        showErrorMessage(message)
    }

    msgSuccess = (message) => {
        showSuccessMessage(message)
    }

    msgWarn = (message) => {
        showWarnMessage(message)
    }
}