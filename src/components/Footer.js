import React from 'react';

const Footer = (props) => {

  return (
    <div className="footer">
      Copyright: {props.copyright}
    </div>
  );
}

export default Footer;
