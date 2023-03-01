import { useState } from 'react'
import { Logo } from './shared'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Logo/>
    </div>
  )
}

export default App
