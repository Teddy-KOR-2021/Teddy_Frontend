import React, { Component } from 'react';
import TalktoChild from './hanbi/Views/TalktoChild';
import RecordSoundDetailContainer from './RecordSound/Containers/RecordSoundDetailContainer';
import RecordSoundListContainer from './RecordSound/Containers/RecordSoundListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <TalktoChild />
        <RecordSoundListContainer />
        <RecordSoundDetailContainer />
      </div>
    );
  }
}

export default App;
