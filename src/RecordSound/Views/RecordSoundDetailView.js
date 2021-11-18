import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

class RecordSoundDetailView extends Component {
    render() {
        const {recordSound} = this.props;
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                    {recordSound.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {recordSound.recordDate}
                    </Typography>
                    <ReactAudioPlayer
                        src={recordSound.soundUrl}
                        autoPlay = {false}
                        controls />
                </CardContent>
            </Card>
        );
    }
}

export default RecordSoundDetailView;