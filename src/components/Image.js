
import React from 'react';


const Image = (props) => {

  const {title, imgSrc, explanation} = props;

  return (
    <div className="main-content">
      <figure className="main-photo">
        <img src={imgSrc} alt="photo of the day"/>
        <figcaption>{title}</figcaption>
      </figure>

      <div className="explanation">
        <p>{explanation}</p>
      </div>
    </div>
  );
}

export default Image
