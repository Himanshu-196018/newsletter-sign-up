import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.func}>{props.text}</button>
  );
}

export default Button;