import { useState } from 'react'

import './App.css'
import Review from './Components/Review'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Review/>
    </>
  )
}

export default App
