import { useState } from 'react'
import HelloWorld from "./topics/jsx/HelloWorld"
import Name from './topics/jsx/Name'
import NestedComponent from './topics/components/NestedComponent'
import TryProps from './topics/props/TryProps'
import FunctionAsProp from './topics/props/FunctionAsProp'
// import OnClikcEvents from './topics/events/OnClickEventss'
// import InLineEventHandler from './topics/events/InLineEventHandler'
import { InLineEventHandler } from './topics/events/InLineEventHandler';
import OnChangeEvent from './topics/events/OnChangeEvent'
import OnClickEventTry from './topics/events/OnClickEventTry'
import CountState from './topics/state/CountState'
import ShowName from './topics/state/ShowName'
import InputForm from './topics/state/InputForm'
import Fruits from "./topics/listNkeys/Fruits"
import Students from './topics/listNkeys/Students'


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
    {/* <Name /> */}

    {/* <h2>Below would be the nested component</h2>
    <NestedComponent count={"Mridul"} />
    <TryProps
  name="Xyz"
  age={22}
  location="Punjab"
/> */}

 <FunctionAsProp  clickHandler={sayHello}  />

 {/* <OnClikcEvents /> */}
 {/* <InLineEventHandler />
 <OnChangeEvent />
 <OnClickEventTry /> */}
{/* 
 <CountState />
<ShowName />
<InputForm /> */}

<h2>List and keys</h2>
<Fruits />

<Students />




    </>
  )
}

export default App
