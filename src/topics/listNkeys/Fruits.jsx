

function Fruits(){

    const fruit=["apple", "banana", "mango"]
    return(
        <>
        {fruit.map((fruit)=>(
            <li>{fruit}</li>
        ))}        
        </>
    )
}

export default Fruits;