import GenericService from '../../api/generic/GenericService'
import Api from '../../api/generic/Api'

const BASE_URL = `${process.env.REACT_APP_BASE_SERVICE_URL}/api/permissoes`

class PermissaoService extends GenericService {
    constructor(){
        super(PERMISSAO_PAGE_MODE_CHANGED, BASE_URL)
        this.api = new Api()
    }
}

export const PERMISSAO_FIND = 'PERMISSAO_FIND'
export const PERMISSAO_ALL = 'PERMISSAO_ALL'
export const PERMISSAO_FORM = 'PERMISSAO_FORM'
export const PERMISSAO_PAGE_MODE_CHANGED = 'PERMISSAO_PAGE_MODE_CHANGED'
