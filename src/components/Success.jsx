import React from 'react';
import Button from "./Button"

const text = "Dismiss message";

const Success = () => {
  return (
    <section>
      <img src="./images/icon-success.svg" alt='' />
      <h2>Thanks for subscribing!</h2>
      <p>A confirmation email has been sent to <span></span>. Please open it and click the button inside to confirm your subscription</p>
      <Button type={"button"} onClick={""}  text={text} />
    </section>
  );
}

export default Success;