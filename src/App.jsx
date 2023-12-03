import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Singup from './components/Singup'
import SingIn from './components/SingIn'
import Resetpassword from './components/Resetpassword'
import Deshboard from './components/Deshboard'
import AllUrls from './components/AllUrls'
import Newpassword from './components/Newpassword'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/singup' element={<Singup />} />
          <Route path='/' element={ <SingIn/>} />
          <Route path='/reset-password' element={<Resetpassword />} />
          <Route path='/deshboard' element={<Deshboard />} />
          <Route path='/my-urls' element={<AllUrls />} />
          <Route path='/reset-password/new-password' element={<Newpassword />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App