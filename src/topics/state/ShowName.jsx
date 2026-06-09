import { useState } from "react";

function ShowName(){
    const [name , SetName] = useState("");
    return(
        <>
        <h2>Enter name</h2>
        <input type="text" 
        onChange={(e) => SetName(e.target.value)}
        />

        <h3>name : {name}</h3>
        </>
    )
}

export default ShowName;