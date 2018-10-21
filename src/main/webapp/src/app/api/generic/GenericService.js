import Api from './Api'

export default class GenericService{

    constructor( pageStatusAction){
        this.api = new Api();
        this.pageStatusAction = pageStatusAction;
    }

    changePageStatus = (pagestatus) =>{
        return {
            type: this.pageStatusAction,
            payload: pagestatus
        }
    }
}