import React, { Component } from 'react';
import {observer} from 'mobx-react'
import TalktoChild from '../Views/TalktoChild';

class WatchandTalk extends Component {
    render() {
        return (
            <div>
                <TalktoChild />
            </div>
        );
    }
}

export default observer(WatchandTalk);