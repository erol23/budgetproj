import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import User from '../pages/User'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  const [user, setUser] = useState(false)
  return (
    <>
    <Navbar user={user}/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login setUser={setUser}/>} />
            <Route path='/register' element={<Register setUser={setUser}/>} />
            <Route path='/user' element={<PrivateRouter user={user}/>}>
              <Route path='' element={<User />} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRouter