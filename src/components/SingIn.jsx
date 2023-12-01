import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import auth from '../services/auth';

function SingIn() {
  const [singindata, setSingindata] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const handleSingIn = async (e) => {
    e.preventDefault();
    try {
      const user = await auth.signin(singindata)
      setSingindata({
        email: '',
        password:''
      })
      console.log(user)
    } catch (error) {
      console.log(error);
    }
  };

    
      return (
        <div>
          <div>
            <form onSubmit={handleSingIn}>
              <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={singindata.email}
                  onChange={(e) => setSingindata({ ...singindata, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <br />
                <input
                  type="password"
                  name="password"
                  value={singindata.password}
                  onChange={(e) => setSingindata({ ...singindata, password: e.target.value })}
                  required
                />
              </div>
              <br />
              <button type="submit">Submit</button>
                  </form>
                  <Link to='/reset-password'>Forget Password</Link>
              </div>
              <p>If New User Please Register</p>
              <Link to='/singup'>SingUp</Link>
        </div>
      );
}

export default SingIn