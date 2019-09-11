import React, { useState } from "react";
import "./App.css";

import Header from './components/Header';
import Date from './components/Date';
import Image from './components/Image';
import Footer from './components/Footer';

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
      <Header />
      <Date date={date}/>
      <Image title={title} imgSrc={url} explanation={explanation} />
      <Footer copyright={copyright} />
    </div>
  );
}

export default App;
