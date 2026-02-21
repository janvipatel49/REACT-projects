import React, { useState } from 'react'

const Counter = () => {

  let [count, setcount] = useState(0)

  const increment = () => {
    setcount(count + 1)
  }
  const decrement = () => {
    if (count > 0) {
      setcount(count - 1)
    }
  }
  const reset = () => {
    setcount(count = 0)
  }

return (
    <div className='main'>
     
      <div className='counter'>
         <h1>Counter app</h1>
        
         <h1 className='count'> {count}</h1>
        <div className="btn">
         
          
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>

      </div>
    </div>

  )
}

export default Counter