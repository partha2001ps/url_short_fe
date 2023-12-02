import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Singup from './components/Singup'
import SingIn from './components/SingIn'
import Resetpassword from './components/Resetpassword'
import Deshboard from './components/Deshboard'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/singup' element={<Singup />} />
          <Route path='/' element={ <SingIn/>} />
          <Route path='/reset-password' element={<Resetpassword />} />
          <Route path='/deshboard' element={ <Deshboard/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App