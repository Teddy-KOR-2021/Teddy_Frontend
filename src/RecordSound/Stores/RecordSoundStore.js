import { makeAutoObservable, runInAction } from "mobx";
import RecordSoundApi from "../Api/RecordSoundApi";

class RecordSound{
    recordSound = {
        id : "",
        title : "", //HH:MM:SS초 아이의 대답이 녹음되었습니다.
        recordDate: "",
        soundUrl: "", //녹음본 
        imgUrl: "", //분석그래프 이미지
    }
    recordSoundList = [];

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async selectAll(){
        try{
            const result = await RecordSoundApi.recordSoundList();
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
            const result = await RecordSoundApi.recordSoundDetail(id);
            runInAction(()=> {this.recordSound = result})
        }catch(error){
            this.message = error.message;
        }
    }



    }
export default new RecordSound();