import React, { useState } from "react";
import "./App.css";

import Header from './components';
import Date from './components';
import Image from './components';
import Footer from './components';

function App() {
  const [state, setState] = useState({
    date:'', 
    explanation:'',
    url: '',
    title: '',
    copyright: ''
  })

  const {date, title, copyright, url, explanation} = state;
  return (
    <div className="App">
      <Header />;
      <Date date={date}/>
      <Image title={title} imgSrc={url} explanation={explanation} />
      <Footer copyright={copyright} />
    </div>
  );
}

export default App;
