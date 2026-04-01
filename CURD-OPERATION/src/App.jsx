import { useState } from 'react'

import './App.css'
import StudentManagement from './Components/Studentmanagement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<StudentManagement/>
    </>
  )
}

export default App
