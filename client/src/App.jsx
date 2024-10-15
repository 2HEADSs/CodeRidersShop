import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/header/home/Home'
import Login from './components/header/login/Login'

function App() {

  return (
    //to remove css from root element if i want a navigation which will 
    //be hidden when scroling
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <h1>Test Heading</h1>
    </>
  )
}

export default App
