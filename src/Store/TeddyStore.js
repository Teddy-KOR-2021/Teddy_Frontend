import { makeAutoObservable, runInAction } from "mobx";
import TeddyApi from '../Api/TeddyApi'

class TeddyStore {
    recordSound = {
        id : "",
        title : "", //HH:MM:SS초 아이의 대답이 녹음되었습니다.
        date: "",
        soundUrl: "", //녹음본 
        imgUrl: "",
    }

    talktoChild = {
        id:"",
        text: ""
    }

    init = () => {
        this.talktoChild = {id:"", text:""}
    }

    recordSoundList = [];

    constructor(){
        makeAutoObservable(this, {}, {autoBind:true})
    }

    TextSetProps = (name, value) => {
        this.talktoChild = {...this.talktoChild, [name]:value}
    }

    goHome(e) {
        window.location.href = '/';
    }

    goRecordSound(e) {
        window.location.href = '/record/';
    }

    goTalktoChild(e) {
        window.location.href = '/talktochild/';
    }

    goGraph(e) {
        window.location.href = 'http://18.169.185.73:8000/analysis/testdg6/';
        // window.location.href = 'http://localhost:8000/analysis/testdg4/';
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

    async recordSoundRemove() {
        try{
            await TeddyApi.recordSoundDelete(this.recordSound.id);
            alert('녹음이 성공적으로 삭제되었습니다!')
            this.selectAll();
        }catch(error){
            this.message = error.message;
        }

      }

    async selectText(){
        try{
            console.log(this.talktoChild)
            await TeddyApi.talktoChildText(this.talktoChild);
            alert('아이에게 하고 싶은 말이 전송되었습니다!')
            // this.publishText()
        }catch(error){
            alert('전송 실패!')
            this.message = error.message;
        }
        this.init()
    }

    // async publishText(){
    //     try{
    //         await TeddyApi.publish();
    //     }catch(error){
    //         this.message = error.message;
    //     }
    // }




}

export default new TeddyStore();
