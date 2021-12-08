import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

class RecordSoundDetailView extends Component {
    render() {
        const {recordSound, recordSoundRemove} = this.props;
        const itemData = [
            {id: 1, img: recordSound.imgUrl},
        ]
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                    {recordSound.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {recordSound.date}
                    </Typography>
                    <ReactAudioPlayer
                        src={recordSound.soundUrl}
                        autoPlay = {false}
                        controls />
                    <ImageList sx={{ width: 300, height: 180 }} cols={1} rowHeight={164}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.id}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.img}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Button onClick={()=>recordSoundRemove()} variant="outlined" endIcon={<DeleteIcon />}>
                    삭제
                    </Button>
                </CardContent>
            </Card>


        );
    }
}

export default RecordSoundDetailView;