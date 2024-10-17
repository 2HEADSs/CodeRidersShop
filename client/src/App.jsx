import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Catalog from './components/catalog/Catalog'
import User from './components/user/User'

function App() {

  return (
    //to remove css from root element if i want a navigation which will 
    //be hidden when scroling
    <>
      <Header />
      <h1>Test Heading</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </>
  )
}

export default App
