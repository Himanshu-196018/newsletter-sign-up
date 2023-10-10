import React from "react";
import Button from "./Button";

const text = "Dismiss message";

const Success = (props) => {
  return (
    <section>
      <img src="./images/icon-success.svg" alt="" />
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to <span>{props.haveEmail}</span>.
        Please open it and click the button inside to confirm your subscription
      </p>
      <Button type={"button"} func={props.toggleResponse} text={text} />
    </section>
  );
};

export default Success;
