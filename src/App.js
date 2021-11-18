import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './hanbi/Main/Navbar';
import Home from './hanbi/Main/Home';
import Graph from './hanbi/Containers/Graph';
import RecordSoundDetailContainer from './RecordSound/Containers/RecordSoundDetailContainer';
import RecordSoundListContainer from './RecordSound/Containers/RecordSoundListContainer';
import WatchandTalk from './hanbi/Containers/WatchandTalk';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route exact path="/watchandtalk/" element={<WatchandTalk />}/>
          <Route exact path="/record/detail/:id" element={<RecordSoundDetailContainer />}/>
          <Route exact path="/record/list/" element={<RecordSoundListContainer />}/>
          <Route exact path="/graph/" element={<Graph />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
