import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import BikeList from './components/catalog/BikeList'
import User from './components/user/User'
import BikeCreate from './components/bike-create/BikeCreate'
import BikeDetails from './components/bike-details/BikeDetails'
import { useState } from 'react'
import { AuthContext } from './contexts/authContext'

function App() {
  const [authState, setAuthState] = useState({});
  const changeAuthState = (state) => {
    console.log(state);

    // localStorage.clear();
    localStorage.setItem('user', JSON.stringify(state))
    setAuthState(state)
  }

  const contextData = {
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.accessToken,
    changeAuthState
  }

  return (
    //to remove css from root element if i want a navigation which will 
    //be hidden when scroling

    <>
      <AuthContext.Provider value={
        contextData
      }>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/bikes' element={<BikeList />} />
          <Route path='/bikes/:bikeId/details' element={<BikeDetails />} />
          <Route path='/user' element={<User />} />
          <Route path='/create' element={<BikeCreate />} />
        </Routes>
      </AuthContext.Provider >
    </>
  )
}

export default App
