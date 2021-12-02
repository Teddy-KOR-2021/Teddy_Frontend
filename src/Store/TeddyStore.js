import { makeAutoObservable, runInAction } from "mobx";
import TeddyApi from '../Api/TeddyApi'

class TeddyStore {
    recordSound = {
        id : "",
        title : "", //HH:MM:SS초 아이의 대답이 녹음되었습니다.
        recordDate: "",
        soundUrl: "", //녹음본 
        imgUrl1: "",
        imgUrl2: "",
        imgUrl3: "",
    }

    recordSoundList = [];

    constructor(){
        makeAutoObservable(this, {}, {autoBind:true})
    }

    goHome(e) {
        window.location.href = '/';
    }

    goRecordSound(e) {
        window.location.href = '/record/';
    }

    goWatchandTalk(e) {
        window.location.href = '/watchandtalk/';
    }

    goGraph(e) {
        window.location.href = '/graph/';
    }

    async selectAll(){
        try{
            const result = await TeddyApi.recordSoundList();
            console.log(result,"result===========");
            runInAction(()=>this.recordSoundList=result);
            console.log(this.recordSoundList,"List========")
            }
        catch(error){
            runInAction(()=>this.message=error.message);
            }
            console.log(this.recordSoundList,"List========")        
        }

    async selectRecordSound(id){
        try{
            const result = await TeddyApi.recordSoundDetail(id);
            runInAction(()=> {this.recordSound = result})
        }catch(error){
            this.message = error.message;
        }
    }

}

export default new TeddyStore();
