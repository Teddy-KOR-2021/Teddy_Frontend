import React from 'react';
import { subscribe } from 'mqtt-react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const sendMessage = props => () => props.mqtt.publish('iot', 'message')
const SendMessageButton = props => <Button variant="contained" endIcon={<SendIcon />} onClick={sendMessage(props)}>전송 </Button>

export default subscribe({ topic: 'iot' })(SendMessageButton)