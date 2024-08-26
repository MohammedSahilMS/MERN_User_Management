import React from 'react'
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import ProtecetdRoute from './ProtectedRoute'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<ProtecetdRoute> <Dashboard/> </ProtecetdRoute> } /> 
      </Routes>
    </Router>
  )
}

export default App