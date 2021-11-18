import {makeAutoObservable} from 'mobx'
// import TeddyApi from '../Api/TeddyApi'

class TeddyStore {

    constructor(){
        makeAutoObservable(this, {}, {autoBind:true})
    }

    goHome(e) {
        window.location.href = '/';
    }

    goRecordSound(e) {
        window.location.href = '/record/list/';
    }

    goWatchandTalk(e) {
        window.location.href = '/watchandtalk/';
    }

    goGraph(e) {
        window.location.href = '/graph/';
    }

}

export default new TeddyStore();