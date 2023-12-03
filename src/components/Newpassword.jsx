import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { authInstance } from '../services/instance';

function Newpassword() {
    const [password, setpassword] = useState('');
   const changeNewPassword = async(e) => {
     e.preventDefault();
     const currentURL = window.location.href;
     const match = currentURL.match(/\/reset-password\/new-password\/(\w{6})/);
   
     if (match) {
       const OTP = match[1];
       console.log(OTP)
       const res = await authInstance.post(`/reset-password/${OTP}`, {password});
       console.log(res.data);
     } else {
       console.error("URL format doesn't match expected pattern");
     }
   };
  return (
      <div><p>New password Change</p>
          <form onSubmit={changeNewPassword}>
          <label>New Password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword( e.target.value );
            }}
            required
          />   <br /><br /><button type='submit'>submit</button>
          </form>
          <Link to='/'>Singin</Link>
        </div>
       
  )
}

export default Newpassword