import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Newpassword() {
    const [password, setpassword] = useState('');
   const changeNewPassword = (e) => {
    e.preventDefault();
}
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