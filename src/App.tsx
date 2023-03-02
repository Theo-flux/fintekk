import { Fragment, useState } from 'react'
import { Logo } from './shared'
import { Nav } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Nav/>
    </Fragment>
  )
}

export default App
