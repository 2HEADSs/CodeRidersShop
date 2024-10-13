import { Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'

function App() {

  return (
    //to remove css from root element if i want a navigation which will 
    //be hidden when scroling
    <>
      <Header />
      <h1>Test Heading</h1>
    </>
  )
}

export default App
