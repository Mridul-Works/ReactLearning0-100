import { useState } from 'react'
import HelloWorld from "./topics/jsx/HelloWorld"
import Name from './topics/jsx/Name'
import NestedComponent from './topics/components/NestedComponent'
import TryProps from './topics/props/TryProps'
import FunctionAsProp from './topics/props/FunctionAsProp'

function App() {
  const [count, setCount] = useState(0)
    const sayHello = () => {
    alert("Hello");
  };

  return (
    <>
    <h1>hello world</h1>
    < HelloWorld />
    {/* < SayHi /> */}
    <Name />

    <h2>Below would be the nested component</h2>
    <NestedComponent count={"Mridul"} />
    <TryProps
  name="Xyz"
  age={22}
  location="Punjab"
/>

 <FunctionAsProp  clickHandler={sayHello}  />
    </>
  )
}

export default App
