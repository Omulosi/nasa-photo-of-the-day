import React from 'react';


const Date = (props) => {
  const { date } = props;
  return (
    <div className="date">
      {date}
    </div>
  );
}

export default Date;
