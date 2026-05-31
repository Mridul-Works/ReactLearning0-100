import { useState } from 'react'
import HelloWorld from "./topics/jsx/HelloWorld"
import Name from './topics/jsx/Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello world</h1>
    < HelloWorld />
    {/* < SayHi /> */}
    <Name />
    </>
  )
}

export default App
