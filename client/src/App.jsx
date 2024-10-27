import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Bikes from './components/catalog/Bikes'
import User from './components/user/User'
import BikeCreate from './components/bike-create/BikeCreate'
import BikeDetails from './components/bike-details/BikeDetails'

function App() {

  return (
    //to remove css from root element if i want a navigation which will 
    //be hidden when scroling
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/bikes' element={<Bikes />} />
        <Route path='/bikes/:bikeId/details' element={<BikeDetails />} />
        <Route path='/user' element={<User />} />
        <Route path='/create' element={<BikeCreate />} />
      </Routes>
    </>
  )
}

export default App
