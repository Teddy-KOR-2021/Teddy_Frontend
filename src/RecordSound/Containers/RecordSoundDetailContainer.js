import React, { Component } from 'react';
import {observer} from 'mobx-react'
import RecordSoundDetailView from '../Views/RecordSoundDetailView';
import RecordSoundStore from '../Stores/RecordSoundStore';

class RecordSoundDetailContainer extends Component {
    recordSoundStore = RecordSoundStore
    componentDidMount(){
        this.recordSoundStore.selectAll();
    }
    render() {
        const {recordSound} = this.recordSoundStore
        return (
            <div>
                <RecordSoundDetailView recordSound={recordSound} />
            </div>
            
        );
    }
}

export default observer(RecordSoundDetailContainer);