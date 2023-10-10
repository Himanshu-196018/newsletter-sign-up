import React from 'react';
import Button from "./Button";

const handleSubmit = () => {
  console.log("hello");
}

const text = "Subscribe to monthly newsletter";

const Form = () => {
  return (
    <form>
      <label htmlFor="email">Email Address
        <p className='error-text'></p>
        <input type="email" name="email" id="email" placeholder='email@company.com' />
      </label>
      <Button type={"submit"} func={handleSubmit} text={text}/>
    </form>
  );
}

export default Form;