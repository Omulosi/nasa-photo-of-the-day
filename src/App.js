import React, { useState } from "react";
import "./App.css";
import img from "./assets/mountains.jpeg";

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
      <Date date="2019-09-11"/>
      <Image title="IC 1805: The Heart Nebula" imgSrc={img} explanation="What energizes the Heart Nebula? First, the large emission nebula dubbed IC 1805 looks, in whole, like a human heart.  The nebula glows brightly in red light emitted by its most prominent element: hydrogen.  The red glow and the larger shape are all powered by a small group of stars near the nebula's center." />
      <Footer copyright="Bray Falls" />
    </div>
  );
}

export default App;
