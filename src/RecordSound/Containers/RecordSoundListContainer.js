import React, { Component } from 'react';
import RecordSoundStore from '../Stores/RecordSoundStore';
import RecordSoundView from '../Views/RecordSoundView';
import {observer} from 'mobx-react'

class RecordSoundListContainer extends Component {
    recordSoundStore = RecordSoundStore;

    componentDidMount(){
        this.recordSoundStore.selectAll();
    }

    render() {
        const {recordSoundList, selectRecordSound} = this.recordSoundStore;
        const temp = recordSoundList.map(recordSound =>{
            return(
                <RecordSoundView key={recordSound.id} recordSound={recordSound} onSelect={selectRecordSound} />
            )
        })

        return (
            // <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            // {recordSoundList.map((recordSound) => (
            //     <ListItem
            //     key={recordSound.id}
            //     disableGutters
            //     secondaryAction={
            //         <IconButton onSelect = {selectRecordSound}>
            //           <CommentIcon />
            //         </IconButton>
            //       }
            //     >
            //     <ListItemText primary={recordSound.title} />
            //     </ListItem>
            // ))}
            // </List>
            <div>
                <h2>녹음 목록</h2>
                {temp}
            </div>
            
        );
    }
}

export default observer(RecordSoundListContainer);