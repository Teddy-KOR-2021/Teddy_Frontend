import React, { Component } from 'react';
import {observer} from 'mobx-react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import TeddyStore from '../Store/TeddyStore';
import TextField from '@mui/material/TextField';
// import { subscribe } from 'mqtt-react';
// import SendMessageButton from './SendMessageButton';



class TalktoChild extends Component {
    render() {
        const {talktoChild, goHome, TextSetProps, selectText} = TeddyStore;
        // const sendMessage = props => () => props.mqtt.publish('iot', 'message')
        // const SendMessageButton = props => <Button variant="contained" endIcon={<SendIcon />} onClick={sendMessage(props)}>전송 </Button>
        return (
            <div>
                <br/><br/>
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="flex-end"
                spacing={2}
                >
                <TextField
                    style ={{width: '50%'}}
                    id="outlined-multiline-static"
                    label="아이에게 하고 싶은 말을 입력하세요."
                    multiline
                    rows={5}
                    name="text"
                    value={talktoChild.text}  
                    onChange={(e)=>TextSetProps(e.target.name, e.target.value)}
                />
                </Stack>
                
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="flex-end"
                spacing={2}
                >
                    <Button variant="contained" endIcon={<SendIcon />} onClick={()=>selectText()}>
                        전송 
                    </Button>

                    <Button onClick={()=>goHome()} variant="outlined" endIcon={<DeleteIcon />}>
                        취소
                    </Button>
                </Stack>
                
            </div>
        );
    }
}
export default observer(TalktoChild);