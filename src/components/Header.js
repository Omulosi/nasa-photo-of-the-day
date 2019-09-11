import React from 'react';


const Header = (props) => {

  return (
    <div className="header">
      <h1>Astronomy Picture of the Day</h1>
      <input type="date" id="date" name="date" value={props.date}/>
    </div>
  )
}

export default Header;
