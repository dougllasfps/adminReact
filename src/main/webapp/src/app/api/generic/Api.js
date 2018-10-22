import axios from 'axios'

export default class Api{

    constructor(){}

    get = (url, onSuccess, onError) => {
        return 
            axios.get(url)
                    .then( resp => {
                        if(onSuccess){
                            onSuccess(resp)
                        }
                    })
                    .catch( error => {
                        if(onError){
                            onError(error)
                        }
                    })
    }

    post = (url, data, onSuccess, onError) => {
        return 
            axios.post(url, data)
                    .then( resp => {
                        if(onSuccess){
                            onSuccess(resp)
                        }
                    })
                    .catch( error => {
                        if(onError){
                            onError(error)
                        }
                    })
    }

    put = (url, data, onSuccess, onError) => {
        return 
            axios.put(url, data)
                    .then( resp => {
                        if(onSuccess){
                            onSuccess(resp)
                        }
                    })
                    .catch( error => {
                        if(onError){
                            onError(error)
                        }
                    })
    }

    delete = (url, onSuccess, onError) => {
        return 
            axios.delete(url)
                    .then( resp => {
                        if(onSuccess){
                            onSuccess(resp)
                        }
                    })
                    .catch( error => {
                        if(onError){
                            onError(error)
                        }
                    })
    }
}