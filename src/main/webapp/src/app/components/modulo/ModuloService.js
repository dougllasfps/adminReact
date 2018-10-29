import GenericService from '../../api/generic/GenericService'

export const BASE_URL = `${process.env.REACT_APP_BASE_SERVICE_URL}/api/modulos`

export const MODULO_FIND = 'MODULO_FIND'
export const MODULO_ALL = 'MODULO_ALL'
export const MODULO_FORM = 'MODULO_FORM'
export const MODULO_PAGE_MODE_CHANGED = 'MODULO_PAGE_MODE_CHANGED'

export default class ModuloService extends GenericService{

    constructor(){
        super({
            baseUrl: BASE_URL
        })
    }

    createNewEntity = () =>{
        return {
            descricao:'', 
            label: ''
        }
    }
}