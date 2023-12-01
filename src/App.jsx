import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Singup from './components/Singup'
import SingIn from './components/SingIn'
import Resetpassword from './components/Resetpassword'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/singup' element={<Singup />} />
          <Route path='/' element={ <SingIn/>} />
          <Route path='/reset-password' element={<Resetpassword />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App