import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import Header from './components/Header';
import Date from './components/Date';
import Image from './components/Image';
import Footer from './components/Footer';
import Loading from './components/Loading';


//const nasaAPI = "https://lambda-github-api-server.herokuapp.com/";
const nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

function App() {
  const [state, setState] = useState({
    date:'', 
    explanation:'',
    url: '',
    title: '',
    copyright: '',
    isLoaded: false,
  })

  const [alert, setAlert] = useState('Loading...')

  const [dateQuery, setDateQuery] = useState('');

  useEffect(() => {
    setState(Object.assign({}, state, {isLoaded: false}))
    let query = '';
    if (dateQuery) {
      query = `&date=${dateQuery}`;
    }
    axios.get(nasaAPI + `${query}`)
      .then(response => response.data)
      .then(data => {
        setState(Object.assign({}, data, {isLoaded: true}))
      })
      .catch(error => {
        setAlert('Oops! There was an error loading that image. Try again!');
        setTimeout(() =>  {
          setState(Object.assign({}, state, {isLoaded: true}))
        }, 3000)
      })
  }, [dateQuery]);

  const handleChange = (e) => {
    setDateQuery(e.target.value);
  }

  const {date, title, copyright, url, explanation, isLoaded} = state;

  if (!isLoaded){
    return <Loading value={alert}/>
  }

  return (
    <div className="App">
      <Header date={dateQuery} handleChange={handleChange}/>
      <Date date={date}/>
      <Image title={title} imgSrc={url} explanation={explanation} />
      <Footer copyright={copyright} />
    </div>
  );
}

export default App;
