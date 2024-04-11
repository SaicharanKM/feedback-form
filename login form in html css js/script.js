import React, { useState } from 'react';

function feedbackForm() {
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [city, setcity] = useState('');
  const [feedback, setfeedback] = useState('');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('#', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, city, feedback }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Email sent successfully');
          // Add any further actions you want to perform after successful email sending
        } else {
          console.error('Error sending email');
        }
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">city:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setcity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <input
            type="text"
            id="feedback"
            value={city}
            onChange={(e) => setfeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default feedbackForm;

  