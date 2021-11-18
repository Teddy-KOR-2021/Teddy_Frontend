import {makeAutoObservable} from 'mobx'
// import TeddyApi from '../Api/TeddyApi'

class TeddyStore {

    constructor(){
        makeAutoObservable(this, {}, {autoBind:true})
    }
}

export default new TeddyStore();