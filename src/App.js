import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";
import img from "./assets/mountains.jpeg";

import Header from './components/Header';
import Date from './components/Date';
import Image from './components/Image';
import Footer from './components/Footer';


const nasaAPI = "https://lambda-github-api-server.herokuapp.com/";
//const nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

function App() {
  const [state, setState] = useState({
    date:'', 
    explanation:'',
    url: '',
    title: '',
    copyright: ''
  })

  useEffect(() => {
    axios.get(nasaAPI)
      .then(response => response.data)
      .then(data => {
        setState(data)
      })
  }, []);

  const handleChange = (e) => {
    e.preventDefault();

  }

  const {date, title, copyright, url, explanation} = state;

  return (
    <div className="App">
      <Header date={date} handleChange={handleChange}/>
      <Date date={date}/>
      <Image title={title} imgSrc={url} explanation={explanation} />
      <Footer copyright="Bray Falls" />
    </div>
  );
}

export default App;
