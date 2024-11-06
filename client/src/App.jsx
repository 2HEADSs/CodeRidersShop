import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import BikeList from './components/catalog/BikeList';
import User from './components/user/User';
import BikeCreate from './components/bike-create/BikeCreate';
import BikeDetails from './components/bike-details/BikeDetails';
import { AuthContextProvider } from './contexts/AuthContext';
import Logout from './components/logout/Logout';

function App() {
  return (
    //to remove css from root element if i want a navigation which will 
    //be hidden when scroling
    <>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/bikes' element={<BikeList />} />
          <Route path='/bikes/:bikeId/details' element={<BikeDetails />} />
          <Route path='/user' element={<User />} />
          <Route path='/create' element={<BikeCreate />} />
          <Route path='/logout' element={< Logout />} />
        </Routes>
      </AuthContextProvider >
    </>
  )
}

export default App
