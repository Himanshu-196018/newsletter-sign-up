import React from 'react';
import Button from "./Button";

const handleSubmit = () => {
  console.log("hello");
}

const Form = () => {
  return (
    <form>
      <label for="email">Email Address
        <p className='error-text'></p>
        <input type="email" name="email" id="email" placeholder='email@company.com' />
      </label>
      <Button type={"submit"} onClick={handleSubmit} />
    </form>
  )
}

export default Form;