import React, { useState } from 'react';
import { authInstance } from '../services/instance';

function ActiveAccount() {
  const[info,setInfo]=useState('')
  const handleactive = async (e) => {
    e.preventDefault();
    const currentURL = window.location.href;
    const match = currentURL.match(/\/activate-account\/(\w{10})/);

    if (match) {
      const activationToken = match[1];
      try {
        const res = await authInstance.get(`/activate-account/${activationToken}`);
        console.log('Response:', res);
        
        if (res.data) {
          console.log('Activation successful:', res.data);
          setInfo(res.data.message)
        } else {
          console.error('No data received in the response');
        }
      } catch (error) {
        console.error('Error occurred during activation', error);
      }
    } else {
      console.error("URL format doesn't match the expected pattern");
    }
  };

  return (
    <div>
      <div className="your-custom-class">
      <h3>To below, click the Active button to activate your account</h3>
      <button onClick={handleactive} id='btn'>Activate</button>
      <p>{info}</p>
    </div>
</div>
  );
}

export default ActiveAccount;
