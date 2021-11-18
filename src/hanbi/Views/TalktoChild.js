import React, { Component } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


class TalktoChild extends Component {
    render() {
        return (
            <div>
                <textarea cols="40" rows="8" name="question"/>
                <p/>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        전송
                    </Button>
                    <Button variant="outlined" endIcon={<DeleteIcon />}>
                        취소
                    </Button>

                </Stack>
                
            </div>
        );
    }
}

export default TalktoChild;