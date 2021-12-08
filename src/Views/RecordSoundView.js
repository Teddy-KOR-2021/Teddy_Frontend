import React, { Component } from 'react';

class RecordSoundView extends Component {
    render() {
        const {recordSound, onSelect} = this.props;
        return (
            <div onClick={()=>onSelect(recordSound.id)}>
                <h2>{recordSound.title}</h2> <hr/>
            </div>
        );
    }
}

export default RecordSoundView;
