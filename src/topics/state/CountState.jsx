import { useState } from "react";

function CountState (){
   const [count , setCount] = useState(0);
    return(
        <>
        <h1>count: {count}</h1>
        <h1>SetCount: {setCount}</h1>

        <button onClick={()=> setCount (count +1)}>count ++</button>


        </>
    )
}

export default CountState;