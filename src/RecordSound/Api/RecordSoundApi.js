import axios from "axios";

class RecordSoundApi{
    URL = '/api/recordSound/'

    recordSoundList(){
        return axios.get(this.URL)
                    .then((response)=>response.data);
    }

    recordSoundDetail(id){
        return axios.get(this.URL+`${id}/`)
                    .then((response)=>response.data);
    }

    
}

export default new RecordSoundApi();