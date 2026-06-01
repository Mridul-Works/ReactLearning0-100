import { useState } from 'react'
import HelloWorld from "./topics/jsx/HelloWorld"
import Name from './topics/jsx/Name'
import NestedComponent from './topics/components/NestedComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello world</h1>
    < HelloWorld />
    {/* < SayHi /> */}
    <Name />

    <h2>Below would be the nested component</h2>
    <NestedComponent />
    </>
  )
}

export default App
