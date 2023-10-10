import React, { useState } from "react";
import Success from "./Success";
import HeroImage from "./HeroImage";
import Info from "./Info";
import Form from "./Form";

const Main = () => {
  let [isResponse, setIsResponse] = useState(true);
  let [haveEmail, setHaveEmail] = useState("");

  const toggleResponse = () => {
    setIsResponse(!isResponse);
  };

  return isResponse ? (
    <main>
      <HeroImage />
      <article>
        <Info />
        <Form
          toggleResponse={toggleResponse}
          haveEmail={haveEmail}
          setHaveEmail={setHaveEmail}
        />
      </article>
    </main>
  ) : (
    <Success toggleResponse={toggleResponse} haveEmail={haveEmail} />
  );
};

export default Main;
