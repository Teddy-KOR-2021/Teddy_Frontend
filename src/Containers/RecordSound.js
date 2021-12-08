import React, { Component } from 'react';
import {observer} from 'mobx-react'
import RecordSoundView from '../Views/RecordSoundView';
import RecordSoundDetailView from '../Views/RecordSoundDetailView';
import TeddyStore from '../Store/TeddyStore';


class RecordSound extends Component {
    teddyStore = TeddyStore;
    componentDidMount(){
        this.teddyStore.selectAll();
    }
    render() {
        const {recordSound, recordSoundList, selectRecordSound, recordSoundRemove} = this.teddyStore;
        const temp = recordSoundList.map(recordSound =>{
            return(
                <RecordSoundView key={recordSound.id} recordSound={recordSound} onSelect={selectRecordSound} />
            )
        })
        return (
            <div>
                <RecordSoundDetailView 
                recordSound={recordSound}
                recordSoundRemove={recordSoundRemove} />
                <h3>아이 말  목록</h3>
                {temp}
            </div>
        );
    }
}

export default observer(RecordSound);