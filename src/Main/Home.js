import React, { Component } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TeddyStore from '../Store/TeddyStore';

class Home extends Component {
    render() {
        const {goWatchandTalk, goRecordSound, goGraph} = TeddyStore;
        return (
            <div>
                <Stack   
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                    <Button onClick={()=>goWatchandTalk()} endIcon={<ChatIcon />}>
                        아이 보며 말하기
                    </Button>
                    <Button onClick={()=>goRecordSound()} endIcon={<SettingsVoiceIcon />}>
                        아이 말 확인하기
                    </Button>
                    <Button onClick={()=>goGraph()} endIcon={<InsertChartIcon />}>
                        아이 그래프 보기
                    </Button>
                </Stack>
            </div>
        );
    }
}

export default Home;