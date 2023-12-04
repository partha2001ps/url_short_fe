import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../services/auth';
import '../App.css'
function SingIn() {
  const [singindata, setSingindata] = useState({
    email: '',
    password: ''
  });
  const[msg,setMsg]=useState('')
const navigate=useNavigate()
  const handleSingIn = async (e) => {
    e.preventDefault();
      const user = await auth.signin(singindata)
      setSingindata({
        email: '',
        password:''
      })
    // console.log(user)
    setMsg(user.message)
    if (user.message=='Invalid user'||user.message=='Invalid Password') {
      sessionStorage.removeItem('User')
      navigate('/')
    }
    else  if(user.message=='password correct'){
      navigate('/deshboard')
   }
  };
      return (
        <div className='container'>
          <div className='outside'>
            <h2>URL SHORTENER LOGIN</h2>
            <form onSubmit={handleSingIn} className='form'>
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
            <div><p>{msg}</p></div>
            <Link to='/reset-password'>Forget Password</Link>
            <p>If New User Please Register</p>
              <Link to='/singup'>SingUp</Link>
              </div>
        </div>
      );
}

export default SingIn