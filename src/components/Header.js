import React from 'react';

const Header = (props) => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  month = month < 10? `0`+month: month;
  let day = today.getDate();
  day = day < 10? '0'+day: day;


  return (
    <div className="header">
      <h1>Astronomy Picture of the Day</h1>
      <input type="date" 
        id="date" 
        name="date" 
        value={ props.date } 
        onChange={props.handleChange}
        max={`${year}-${month}-${day}`}/>
    </div>
  )
}

export default Header;
