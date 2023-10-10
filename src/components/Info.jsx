import React from 'react'

const Info = () => {
  return (
    <div className='header'>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul style={{ listStyleImage: `url("./images/icon-list.svg")` }}>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
    </div>
  );
}

export default Info