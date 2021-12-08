import React, { Component } from 'react';
import Typography from '@mui/material/Typography';

class RecordSoundView extends Component {
    render() {
        const {recordSound, onSelect} = this.props;
        return (
            <div onClick={()=>onSelect(recordSound.id)}>
                <Typography variant="h5" component="div">&nbsp;{recordSound.title}</Typography> <hr/>
            </div>
        );
    }
}

export default RecordSoundView;
