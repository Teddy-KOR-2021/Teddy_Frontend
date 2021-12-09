import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Main/Navbar';
import Home from './Main/Home';
// import Graph from './Containers/Graph';
import RecordSound from './Containers/RecordSound';
import TalktoChild from './Views/TalktoChild';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route exact path="/talktochild/" element={<TalktoChild />}/>
          <Route exact path="/record/" element={<RecordSound />}/>
          {/* <Route exact path="/graph/" element={<Graph />} /> */}
        </Routes>
      </BrowserRouter>
      
    );
  }
}

export default App;
