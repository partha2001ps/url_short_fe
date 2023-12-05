import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate=useNavigate()
  const handleLogout = () => {
    sessionStorage.removeItem('User');
    navigate('/');
  };
  return (
      <div className='navBar'><nav>
          <ul className='nav'>
              <li>
                  <NavLink to='/deshboard'>DashBoard</NavLink>
              </li>
              <li>
                <NavLink to='/my-urls'>My URL's</NavLink>
              </li>
              <li>
                <NavLink to='/all-urls'>All URL's</NavLink>
              </li>
         <button onClick={handleLogout} className="logout-button">Logout</button>
      </ul>
      </nav></div>
  )
}

export default NavBar