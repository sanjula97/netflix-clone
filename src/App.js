import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request'

function App() {
  return (
    <div className="App">
      Hello Sanjula
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
    </div>
  );
}

export default App;

//