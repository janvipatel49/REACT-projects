import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './Pages/Shop'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Header from './Components/Header'


const App = () => {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>    
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Contactus' element={<Contactus/>}/>
          
        </Routes>
      
    </div>
  )
}

export default App; 