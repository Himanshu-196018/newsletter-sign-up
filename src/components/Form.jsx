import React, { useState } from "react";
import Button from "./Button";

const Form = (props) => {
  // states
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  /*   function to check valid email   */
  function checkValidEmail() {
    const validRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return email.match(validRegex);
  }

  /*   function to handle form handleSubmit   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // calling function to check email validity
    if (checkValidEmail()) {
      // if true save the email entered and change response
      props.setHaveEmail(email);
      setEmail("");
      props.toggleResponse();
      setError(false);
    } else {
      // if false set error to true
      setError(true);
    }
  };

  /*  rendering components  */
  return (
    <form>
      <label htmlFor="email">
        Email Address
        {error && <p className="error-text">Valid email required</p>}
        <input
          className={error ? "error" : ""}
          type="email"
          name="email"
          id="email"
          placeholder="email@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <Button
        type={"submit"}
        func={handleSubmit}
        text={"Subscribe to monthly newsletter"}
      />
    </form>
  );
};

export default Form;
