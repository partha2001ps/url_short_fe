import React, { useState } from 'react';
import auth from '../services/auth';
import { Link, useNavigate } from 'react-router-dom';

function Singup() {
  const [singupdata, setSingupdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const handlesingup =async (e) => {
    e.preventDefault();
    const user = await auth.singup(singupdata)
    setSingupdata({firstname: '',
    lastname: '',
    email: '',
      password: ''
    })
    console.log(user.message)
    if (user.message == 'user created successfull') {
      navigate('/')
    }
  };

  return (
    <div>
      <form onSubmit={handlesingup}>
        <div>
          <label>First Name:</label><br />
          <input
            type="text"
            name='firstname'
            value={singupdata.firstname}
            onChange={(e) => setSingupdata({ ...singupdata, firstname: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Last Name:</label><br />
          <input
            type="text"
            name='lastname'
            value={singupdata.lastname}
            onChange={(e) => setSingupdata({ ...singupdata, lastname: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name='email'
            value={singupdata.email}
            onChange={(e) => setSingupdata({ ...singupdata, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name='password'
            value={singupdata.password}
            onChange={(e) => setSingupdata({ ...singupdata, password: e.target.value })}
            required
          />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
      <p>Already User To LogIn Page Go</p>
      <Link to='/'>SignIn</Link>
    </div>
  );
}

export default Singup;
