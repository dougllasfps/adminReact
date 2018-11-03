import axios from 'axios'

export default class Api{

    doOnAxios = ( {method, url, data}) => {
        return data ? axios[method](url, data) : axios[method](url)
    }

    get = (url) => {
        return this.doOnAxios({method :'get', url})
    }

    post = (url, data) => {
        return this.doOnAxios({method: 'post', url, data})
    }

    put = (url, data) => {
        return this.doOnAxios({method: 'put', url, data})
    }

    delete = (url) => {
        return this.doOnAxios( {method :'delete',url} )
    }
}