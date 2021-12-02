import axios from "axios";

class TeddyApi{
    URL = '/api/recordSound/'
    
    recordSoundList(){
        return axios.get(this.URL)
                    .then((response)=>response.data);
    }

    recordSoundDetail(id){
        return axios.get(this.URL+`${id}/`)
                    .then((response)=>response.data);
    }

    talktoChildText(talktoChild){
        return axios.post(this.URL+'publish/create/', talktoChild)
                    .then((response)=>response.data)
    }

    // publish(){
    //     return axios.post(this.URL+'publish/')
    //                 .then((response)=>response.data)
    // }

    
}

export default new TeddyApi();