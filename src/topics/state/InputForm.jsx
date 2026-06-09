import { useState } from "react";

function InputForm(){

    const [age, setAge] = useState(0);

    function ageUpdated(e){
      e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get("age");
    setAge(value);
    }
    return(
        <>
        <h2>Form</h2>
        <form action="" onSubmit={ageUpdated}>
            <input type="number" 
            name="age"
            // onChange={(e) => setAge(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>

{ age !== 0  && <h3>AGE : {age}</h3> }
        
        </>
    )
}

export default InputForm;